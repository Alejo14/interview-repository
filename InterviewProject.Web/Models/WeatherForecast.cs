using System;

namespace InterviewProject.Models
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }
        public Day Day { get; set; }
        public Night Night { get; set; }
        public Temperature Temperature {  get; set; }
        public string Location { get; set; }
    }

    public class Temperature
    {
        public string MinimumC { get; set; }
        public string MaximumC { get; set; }
        public string MinimumF { get; set; }
        public string MaximumF { get; set; }
        public string MinimumK { get; set; }
        public string MaximumK { get; set; }
    }

    public class Day
    {
        public string Summary { get; set; }
        public string Icon {  get; set; }
        public Wind Wind { get; set; }
        public Humidity RelativeHumidity { get; set; }
        public Precipitation Precipitation { get; set; }
        public string CloudCover { get; set; }
    }

    public class Night
    {
        public string Summary { get; set; }
        public string Icon { get; set; }
        public Wind Wind { get; set; }
        public Humidity RelativeHumidity { get; set; }
        public Precipitation Precipitation { get; set; }
        public string CloudCover { get; set; }
    }

    public class Humidity
    {
        public string Minimum { get; set; }
        public string Maximum { get; set; }
        public string Average { get; set; }
    }

    public class Wind
    {
        public string WindSpeed { get; set; }
        public string WindDirection { get; set; }
        public string WindGustSpeed { get; set; }
        public string WindGustDirection { get; set; }
    }

    public class Precipitation
    {
        public bool HasPrecipitation { get; set; }
        public string PrecipitationType { get; set; }
        public string PrecipitationIntensity { get; set; }
        public string PrecipitationProbability { get; set; }
        public string RainProbability { get; set; }
        public string IceProbability { get; set; }
        public string ThunderstormProbability { get; set; }
        public string SnowProbability { get; set; }
        public string HoursOfPrecipitation { get; set; }
        public string HoursOfRain { get; set; }
        public string HoursOfSnow { get; set; }
        public string HoursOfIce { get; set; }
    }
}
