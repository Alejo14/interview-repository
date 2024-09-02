using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using InterviewProject.Services;
using Microsoft.Extensions.Configuration;
using System.Text.Json.Nodes;
using System.Collections.Generic;
using InterviewProject.Models;

namespace InterviewProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController(IConfiguration configuration) : ControllerBase
    {
        private readonly IConfiguration _configuration = configuration;

        [HttpGet]
        [Route("GetFiveDayForecast")]
        public async Task<IActionResult> GetFiveDayForecast([FromQuery(Name = "city")] string cityName)
        {
            AccuWeatherService accuWeather = new(_configuration);
            string location = await accuWeather.GetLocationAsync(cityName);
            if (string.IsNullOrWhiteSpace(location))
            {
                return BadRequest($"No se pudo encontrar la locación {cityName}");
            }
            JsonArray forecast = await accuWeather.GetFiveDayForecastByLocation(location);
            if (forecast == null)
            {
                return BadRequest($"No se pudo obtener la información del tiempo para 5 día para la locación {cityName}");
            }
            List<WeatherForecast> result = accuWeather.SetForecastResponse(forecast, cityName);
            if (result == null)
            {
                return BadRequest($"No se pudo parsear la información obtenida para la locación {cityName}");
            }
            return Ok(result);
        }
    }
}
