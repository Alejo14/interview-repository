using InterviewProject.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace InterviewProject.Services
{
    public class AccuWeatherService
    {
        private static HttpClient _client;
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public AccuWeatherService(IConfiguration configuration)
        {
            _configuration = configuration;
            _client = new HttpClient
            {
                BaseAddress = new Uri("http://dataservice.accuweather.com/")
            };
            using ILoggerFactory factory = LoggerFactory.Create(builder => builder.AddConsole());
            _logger = factory.CreateLogger<AccuWeatherService>();
        }

        private string GetApiKey ()
        {
            StreamReader sr = new(_configuration.GetValue<string>("ApiKeyDoc"));
            string apiKey = sr.ReadLine();
            sr.Close();
            return apiKey;
        }

        #region Results
        private static dynamic CreateDayNight(JsonNode node, string className)
        {
            Wind wind = new()
            {
                WindSpeed = node["Wind"]["Speed"]["Value"].ToString() + " " + node["Wind"]["Speed"]["Unit"].ToString(),
                WindDirection = node["Wind"]["Direction"]["Degrees"].ToString() + " " + node["Wind"]["Direction"]["Localized"].ToString(),
                WindGustSpeed = node["WindGust"]["Speed"]["Value"].ToString() + " " + node["WindGust"]["Speed"]["Unit"].ToString(),
                WindGustDirection = node["WindGust"]["Direction"]["Degrees"].ToString() + " " + node["WindGust"]["Direction"]["Localized"].ToString(),
            };
            Humidity humidity = new()
            {
                Maximum = node["RelativeHumidity"]["Maximum"].ToString(),
                Minimum = node["RelativeHumidity"]["Minimum"].ToString(),
                Average = node["RelativeHumidity"]["Average"].ToString(),
            };
            bool hasPrecipitation = bool.Parse(node["HasPrecipitation"].ToString());
            Precipitation precipitation = new()
            {
                HasPrecipitation = hasPrecipitation,
                PrecipitationType = hasPrecipitation ? node["PrecipitationType"].ToString() : "No Precipitation",
                PrecipitationIntensity = hasPrecipitation ? node["PrecipitationIntensity"].ToString() : string.Empty,
                PrecipitationProbability = node["PrecipitationProbability"].ToString(),
                ThunderstormProbability = node["ThunderstormProbability"].ToString(),
                RainProbability = node["RainProbability"].ToString(),
                SnowProbability = node["SnowProbability"].ToString(),
                IceProbability = node["IceProbability"].ToString(),
                HoursOfPrecipitation = node["HoursOfPrecipitation"].ToString(),
                HoursOfRain = node["HoursOfRain"].ToString(),
                HoursOfIce = node["HoursOfIce"].ToString(),
                HoursOfSnow = node["HoursOfSnow"].ToString()
            };
            if (className == "day")
            {
                return new Day()
                {
                    CloudCover = node["CloudCover"].ToString(),
                    Wind = wind,
                    Precipitation = precipitation,
                    RelativeHumidity = humidity,
                    ShortPhrase = node["ShortPhrase"].ToString(),
                    IconPhrase = node["IconPhrase"].ToString()
                };
            }
            else if(className == "night")
            {
                return new Night()
                {
                    CloudCover = node["CloudCover"].ToString(),
                    Wind = wind,
                    Precipitation = precipitation,
                    RelativeHumidity = humidity,
                    ShortPhrase = node["ShortPhrase"].ToString(),
                    IconPhrase = node["IconPhrase"].ToString()
                };
            }
            else
            {
                return null;
            }
        }

        private static Dictionary<string, string> TransfromTemperature(string unit, double value)
        {
            Dictionary<string, string> temperatures = [];   
            switch (unit)
            {
                case "F":
                    temperatures.Add("F", value.ToString() + " °F");
                    double tempFtoK = (value - 32) * (5 / 9) + 273.15;
                    double tempFtoC = (value - 32) * (5 / 9);
                    temperatures.Add("K", tempFtoK.ToString() + " K");
                    temperatures.Add("C", tempFtoC.ToString() + " °C");
                    break;
                case "K":
                    temperatures.Add("K", value.ToString() + " K");
                    double tempKtoF = (value - 273.15) * (9 / 5) + 32;
                    double tempKtoC = value - 273.15;
                    temperatures.Add("F", tempKtoF.ToString() + " °F");
                    temperatures.Add("C", tempKtoC.ToString() + " °C");
                    break;
                case "C":
                    temperatures.Add("C", value.ToString() + " °C");
                    double tempCtoF = value * (9 / 5) + 32;
                    double tempCtoK = value + 273.15;
                    temperatures.Add("F", tempCtoF.ToString() + " °F");
                    temperatures.Add("K", tempCtoK.ToString() + " K");
                    break;
                default:
                    break;
            };
            return temperatures;
        }

        public List<WeatherForecast> SetForecastResponse(JsonArray forecasts, string location)
        {
            List<WeatherForecast> weatherForecasts = [];
            try
            {
                foreach (JsonNode forecast in forecasts)
                {
                    Day day = AccuWeatherService.CreateDayNight(forecast["Day"], "day");
                    Night night = AccuWeatherService.CreateDayNight(forecast["Night"], "night");

                    Temperature temperature = new Temperature();
                    string minUnit = forecast["Temperature"]["Minimum"]["Unit"].ToString();
                    string maxUnit = forecast["Temperature"]["Maximum"]["Unit"].ToString();
                    double minTemp = double.Parse(forecast["Temperature"]["Minimum"]["Value"].ToString());
                    double maxTemp = double.Parse(forecast["Temperature"]["Maximum"]["Value"].ToString());

                    Dictionary<string, string> minTemps = TransfromTemperature(minUnit, minTemp);
                    Dictionary<string, string> maxTemps = TransfromTemperature(maxUnit, maxTemp);

                    temperature.MaximumK = maxTemps["K"];
                    temperature.MaximumF = maxTemps["F"];
                    temperature.MaximumC = maxTemps["C"];

                    temperature.MinimumK = minTemps["K"];
                    temperature.MinimumF = minTemps["F"];
                    temperature.MinimumC = minTemps["C"];

                    WeatherForecast weatherForecast = new WeatherForecast
                    {
                        Date = DateTime.Parse(forecast["Date"].ToString()),
                        Day = day,
                        Night = night,
                        Temperature = temperature,
                        Location = location
                    };

                    weatherForecasts.Add(weatherForecast);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error parseando la información obtenida");
                return null;
            }
            return weatherForecasts;
        }
        #endregion

        public async Task<string> GetLocationAsync(string location)
        {
            string path = _configuration.GetValue<string>("UrlPath:Location");
            string apikey = GetApiKey();
            string lang = _configuration.GetValue<string>("DefaultLanguage");

            HttpResponseMessage response = await _client.GetAsync($"{path}?apikey={apikey}&q={location}&language={lang}");
            if (response.IsSuccessStatusCode)
            {
                try
                {
                    JsonArray jsonResponse =  (JsonArray)JsonNode.Parse(await response.Content.ReadAsStringAsync());
                    return jsonResponse.First()["Key"].ToString();
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error al obtener la llave de una locación.");
                    return null;
                }
            }
            return null;
        }

        public async Task<JsonArray> GetFiveDayForecastByLocation(string locationKey)
        {
            string path = _configuration.GetValue<string>("UrlPath:ForecastFiveDay");
            string apikey = GetApiKey();
            string lang = _configuration.GetValue<string>("DefaultLanguage");

            HttpResponseMessage response = await _client.GetAsync($"{path}/{locationKey}?apikey={apikey}&language={lang}&details=true");
            if (response.IsSuccessStatusCode)
            {
                try
                {
                    JsonObject forecast = (JsonObject)JsonNode.Parse(await response.Content.ReadAsStringAsync());
                    return (JsonArray)forecast["DailyForecasts"];
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error al obtener la data del tiempo para 5 días.");
                    return null;
                }
            }
            return null;
        }
    }
}
