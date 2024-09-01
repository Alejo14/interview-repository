using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
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

            HttpResponseMessage response = await _client.GetAsync($"{path}/{locationKey}?apikey={apikey}&language={lang}");
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
