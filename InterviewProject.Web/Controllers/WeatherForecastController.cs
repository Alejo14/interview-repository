using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using InterviewProject.Models;
using InterviewProject.Services;
using Microsoft.Extensions.Configuration;
using System.Text.Json.Nodes;

namespace InterviewProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController(ILogger logger, IConfiguration configuration) : ControllerBase
    {
        private static readonly string[] Summaries = [
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        ];

        private readonly ILogger _logger = logger;
        private readonly IConfiguration _configuration = configuration;

        [HttpGet]
        [Route("GetFiveDayForecast")]
        public async Task<IActionResult> GetFiveDayForecast([FromQuery(Name = "city")] string cityName)
        {
            AccuWeatherService accuWeather = new(_configuration, _logger);
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
            return Ok(forecast);
        }
    }
}
