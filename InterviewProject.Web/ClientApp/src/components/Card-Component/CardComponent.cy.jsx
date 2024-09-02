import React from 'react'
import CardComponent from './CardComponent'

const data = [
  {
      "date": "2024-09-02T06:00:00-05:00",
      "day": {
          "summary": "Breezy this afternoon",
          "icon": "Partly sunny",
          "wind": {
              "windSpeed": "8.1 mi/h",
              "windDirection": "319° NW",
              "windGustSpeed": "28.8 mi/h",
              "windGustDirection": "300° WNW"
          },
          "relativeHumidity": {
              "minimum": "36",
              "maximum": "67",
              "average": "48"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "0%",
              "rainProbability": "0%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "25%"
      },
      "night": {
          "summary": "Clear, breezy and cooler",
          "icon": "Clear",
          "wind": {
              "windSpeed": "15.0 mi/h",
              "windDirection": "345° NNW",
              "windGustSpeed": "28.8 mi/h",
              "windGustDirection": "311° NW"
          },
          "relativeHumidity": {
              "minimum": "40",
              "maximum": "57",
              "average": "46"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "2%",
              "rainProbability": "2%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "0%"
      },
      "temperature": {
          "minimumC": "14.56 °C",
          "maximumC": "26.88 °C",
          "minimumF": "58 °F",
          "maximumF": "80 °F",
          "minimumK": "287.71 K",
          "maximumK": "300.03 K"
      },
      "location": "New York"
  },
  {
      "date": "2024-09-03T06:00:00-05:00",
      "day": {
          "summary": "Sunny; pleasant, low humidity",
          "icon": "Sunny",
          "wind": {
              "windSpeed": "5.8 mi/h",
              "windDirection": "23° NNE",
              "windGustSpeed": "13.8 mi/h",
              "windGustDirection": "29° NNE"
          },
          "relativeHumidity": {
              "minimum": "28",
              "maximum": "55",
              "average": "36"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "1%",
              "rainProbability": "1%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "0%"
      },
      "night": {
          "summary": "Clear",
          "icon": "Clear",
          "wind": {
              "windSpeed": "1.2 mi/h",
              "windDirection": "50° NE",
              "windGustSpeed": "3.5 mi/h",
              "windGustDirection": "21° NNE"
          },
          "relativeHumidity": {
              "minimum": "38",
              "maximum": "61",
              "average": "50"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "0%",
              "rainProbability": "0%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "0%"
      },
      "temperature": {
          "minimumC": "15.68 °C",
          "maximumC": "22.96 °C",
          "minimumF": "60 °F",
          "maximumF": "73 °F",
          "minimumK": "288.83 K",
          "maximumK": "296.11 K"
      },
      "location": "New York"
  },
  {
      "date": "2024-09-04T06:00:00-05:00",
      "day": {
          "summary": "Sunny and pleasant",
          "icon": "Sunny",
          "wind": {
              "windSpeed": "5.8 mi/h",
              "windDirection": "62° ENE",
              "windGustSpeed": "6.9 mi/h",
              "windGustDirection": "70° ENE"
          },
          "relativeHumidity": {
              "minimum": "37",
              "maximum": "59",
              "average": "44"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "2%",
              "rainProbability": "2%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "0%"
      },
      "night": {
          "summary": "Mainly clear",
          "icon": "Mostly clear",
          "wind": {
              "windSpeed": "4.6 mi/h",
              "windDirection": "73° ENE",
              "windGustSpeed": "6.9 mi/h",
              "windGustDirection": "42° NE"
          },
          "relativeHumidity": {
              "minimum": "49",
              "maximum": "72",
              "average": "60"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "6%",
              "rainProbability": "6%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "16%"
      },
      "temperature": {
          "minimumC": "16.8 °C",
          "maximumC": "24.08 °C",
          "minimumF": "62 °F",
          "maximumF": "75 °F",
          "minimumK": "289.95 K",
          "maximumK": "297.23 K"
      },
      "location": "New York"
  },
  {
      "date": "2024-09-05T06:00:00-05:00",
      "day": {
          "summary": "Mostly sunny and pleasant",
          "icon": "Mostly sunny",
          "wind": {
              "windSpeed": "8.1 mi/h",
              "windDirection": "87° E",
              "windGustSpeed": "10.4 mi/h",
              "windGustDirection": "104° ESE"
          },
          "relativeHumidity": {
              "minimum": "46",
              "maximum": "71",
              "average": "56"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "6%",
              "rainProbability": "6%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "25%"
      },
      "night": {
          "summary": "Partly cloudy",
          "icon": "Partly cloudy",
          "wind": {
              "windSpeed": "6.9 mi/h",
              "windDirection": "75° ENE",
              "windGustSpeed": "9.2 mi/h",
              "windGustDirection": "71° ENE"
          },
          "relativeHumidity": {
              "minimum": "62",
              "maximum": "92",
              "average": "80"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "14%",
              "rainProbability": "14%",
              "iceProbability": "0%",
              "thunderstormProbability": "0%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "41%"
      },
      "temperature": {
          "minimumC": "17.92 °C",
          "maximumC": "24.08 °C",
          "minimumF": "64 °F",
          "maximumF": "75 °F",
          "minimumK": "291.07 K",
          "maximumK": "297.23 K"
      },
      "location": "New York"
  },
  {
      "date": "2024-09-06T06:00:00-05:00",
      "day": {
          "summary": "Chance of a p.m. shower",
          "icon": "Mostly cloudy",
          "wind": {
              "windSpeed": "10.4 mi/h",
              "windDirection": "94° E",
              "windGustSpeed": "12.7 mi/h",
              "windGustDirection": "97° E"
          },
          "relativeHumidity": {
              "minimum": "62",
              "maximum": "88",
              "average": "73"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "30%",
              "rainProbability": "30%",
              "iceProbability": "0%",
              "thunderstormProbability": "5%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "79%"
      },
      "night": {
          "summary": "Mostly cloudy and humid",
          "icon": "Mostly cloudy",
          "wind": {
              "windSpeed": "9.2 mi/h",
              "windDirection": "94° E",
              "windGustSpeed": "16.1 mi/h",
              "windGustDirection": "91° E"
          },
          "relativeHumidity": {
              "minimum": "81",
              "maximum": "90",
              "average": "85"
          },
          "precipitation": {
              "hasPrecipitation": false,
              "precipitationType": "No Precipitation",
              "precipitationIntensity": "",
              "precipitationProbability": "25%",
              "rainProbability": "25%",
              "iceProbability": "0%",
              "thunderstormProbability": "4%",
              "snowProbability": "0%",
              "hoursOfPrecipitation": "0.0",
              "hoursOfRain": "0.0",
              "hoursOfSnow": "0.0",
              "hoursOfIce": "0.0"
          },
          "cloudCover": "75%"
      },
      "temperature": {
          "minimumC": "20.16 °C",
          "maximumC": "24.64 °C",
          "minimumF": "68 °F",
          "maximumF": "76 °F",
          "minimumK": "293.31 K",
          "maximumK": "297.79 K"
      },
      "location": "New York"
  }
];

const index = [0, 1, 2, 3, 4];

index.forEach(i => {
  describe('CardComponent Day Details', () => {
    it('renders', () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<CardComponent weather={data} index={i} isDay={true}/>);
      cy.get("#title > h3").should("have.text", "Day Details");
      cy.get("#title > p").should("have.text", data[i].date.split("T")[0]);
      cy.get("#title > h5").should("have.text", data[i].day.summary);
      cy.get("#precipitation-title").should("have.text", data[i].day.precipitation.hasPrecipitation ? "Precipitations: " + data[i].day.precipitation.precipitationIntensity + data[i].day.precipitation.precipitationType : "Precipitations: " + data[i].day.precipitation.precipitationType);
      cy.get("#precipitation-probability").should("have.text", data[i].day.precipitation.precipitationProbability);
      cy.get("#rain-probability").should("have.text", data[i].day.precipitation.rainProbability);
      cy.get("#snow-probability").should("have.text", data[i].day.precipitation.snowProbability);
      cy.get("#thunderstorm-probability").should("have.text", data[i].day.precipitation.thunderstormProbability);
      cy.get("#ice-probability").should("have.text", data[i].day.precipitation.iceProbability);
      cy.get("#wind-speed > strong").should("have.text", data[i].day.wind.windSpeed);
      cy.get("#wind-dir > strong").should("have.text", data[i].day.wind.windDirection);
      cy.get("#windgust-speed > strong").should("have.text", data[i].day.wind.windGustSpeed);
      cy.get("#windgust-dir > strong").should("have.text", data[i].day.wind.windGustDirection);
      cy.get("#humidity-max > strong").should("have.text", data[i].day.relativeHumidity.maximum);
      cy.get("#humidity-min > strong").should("have.text", data[i].day.relativeHumidity.minimum);
      cy.get("#humidity-avg > strong").should("have.text", data[i].day.relativeHumidity.average);
      cy.get("#f-degrees").should("have.text", `°F: Max. ${data[i].temperature.maximumF} - Min. ${data[i].temperature.minimumF}` );
      cy.get("#c-degrees").should("have.text", `°C: Max. ${data[i].temperature.maximumC} - Min. ${data[i].temperature.minimumC}`);
      cy.get("#k-degrees").should("have.text", `K: Max. ${data[i].temperature.maximumK} - Min. ${data[i].temperature.minimumK}`);
    })
  })

  describe('CardComponent Night Details', () => {
    it('renders', () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<CardComponent weather={data} index={i} isDay={false}/>);
      cy.get("#title > h3").should("have.text", "Night Details");
      cy.get("#title > p").should("have.text", data[i].date.split("T")[0]);
      cy.get("#title > h5").should("have.text", data[i].night.summary);
      cy.get("#precipitation-title").should("have.text", data[i].night.precipitation.hasPrecipitation ? "Precipitations: " + data[i].night.precipitation.precipitationIntensity + data[i].night.precipitation.precipitationType : "Precipitations: " + data[i].night.precipitation.precipitationType);
      cy.get("#precipitation-probability").should("have.text", data[i].night.precipitation.precipitationProbability);
      cy.get("#rain-probability").should("have.text", data[i].night.precipitation.rainProbability);
      cy.get("#snow-probability").should("have.text", data[i].night.precipitation.snowProbability);
      cy.get("#thunderstorm-probability").should("have.text", data[i].night.precipitation.thunderstormProbability);
      cy.get("#ice-probability").should("have.text", data[i].night.precipitation.iceProbability);
      cy.get("#wind-speed > strong").should("have.text", data[i].night.wind.windSpeed);
      cy.get("#wind-dir > strong").should("have.text", data[i].night.wind.windDirection);
      cy.get("#windgust-speed > strong").should("have.text", data[i].night.wind.windGustSpeed);
      cy.get("#windgust-dir > strong").should("have.text", data[i].night.wind.windGustDirection);
      cy.get("#humidity-max > strong").should("have.text", data[i].night.relativeHumidity.maximum);
      cy.get("#humidity-min > strong").should("have.text", data[i].night.relativeHumidity.minimum);
      cy.get("#humidity-avg > strong").should("have.text", data[i].night.relativeHumidity.average);
      cy.get("#f-degrees").should("have.text", `°F: Max. ${data[i].temperature.maximumF} - Min. ${data[i].temperature.minimumF}` );
      cy.get("#c-degrees").should("have.text", `°C: Max. ${data[i].temperature.maximumC} - Min. ${data[i].temperature.minimumC}`);
      cy.get("#k-degrees").should("have.text", `K: Max. ${data[i].temperature.maximumK} - Min. ${data[i].temperature.minimumK}`);
    })
  }) 
})