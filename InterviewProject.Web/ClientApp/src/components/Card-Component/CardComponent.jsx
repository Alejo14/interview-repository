import React from 'react';
import "./CardComponent.css"

const CardComponent = (props) => {
    const {weather, index, isDay} = props;
    const dayOrNight = isDay ? weather[index].day : weather[index].night;
    return (
        <section className='d-flex aling-items-center'>
            <div id="title">
                <h3>{isDay ? "Day": "Night"} Details</h3>
                <p>{weather[index].date.split("T")[0]}</p>
                <h5>{dayOrNight.summary}</h5>
            </div>
            <div className='d-flex flex-column details'>
                <div id="precipitations">
                    <p id="precipitation-title"><strong>Precipitations: {
                        dayOrNight.precipitation.hasPrecipitation ? 
                        dayOrNight.precipitation.precipitationIntensity + " ": ""}{dayOrNight.precipitation.precipitationType}</strong>
                    </p>
                    <p>Probabilities</p>
                    <div className='d-flex box'>
                        <div className='d-flex flex-column card precipitation-card'>
                            <p id="precipitation-probability" className='porcentage'>{dayOrNight.precipitation.precipitationProbability}</p>
                            <p>Precipitation</p>
                        </div>
                        <div className='d-flex flex-column card precipitation-card'>
                            <p id="rain-probability" className='porcentage'>{dayOrNight.precipitation.rainProbability}</p>
                            <p>Rain</p>
                        </div>
                        <div className='d-flex flex-column card precipitation-card'>
                            <p id="snow-probability" className='porcentage'>{dayOrNight.precipitation.snowProbability}</p>
                            <p>Snow</p>
                        </div>
                        <div className='d-flex flex-column card precipitation-card'>
                            <p id="thunderstorm-probability" className='porcentage'>{dayOrNight.precipitation.thunderstormProbability}</p>
                            <p>Thunderstorm</p>
                        </div>
                        <div className='d-flex flex-column card precipitation-card'>
                            <p id="ice-probability" className='porcentage'>{dayOrNight.precipitation.iceProbability}</p>
                            <p>Ice</p>
                        </div>
                    </div>
                </div>
                <div id="moreDetails" className='d-flex'>
                    <div>
                        <p>Wind</p>
                        <div className='d-flex wind-container'>
                            <div className='wind'>
                                <p>Wind</p>
                                <p id="wind-speed">Speed: <strong>{dayOrNight.wind.windSpeed}</strong></p>
                                <p id="wind-dir">Direction: <strong>{dayOrNight.wind.windDirection}</strong></p>
                            </div>
                            <div className='wind'>
                                <p>Wind Gust</p>
                                <p id="windgust-speed">Speed: <strong>{dayOrNight.wind.windGustSpeed}</strong></p>
                                <p id="windgust-dir">Direction: <strong>{dayOrNight.wind.windGustDirection}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <div className='d-flex flex-column humidity-container'>
                            <p id="humidity-max">Maximum: <strong>{dayOrNight.relativeHumidity.maximum}</strong></p>
                            <p id="humidity-min">Minimum: <strong>{dayOrNight.relativeHumidity.minimum}</strong></p>
                            <p id="humidity-avg">Average: <strong>{dayOrNight.relativeHumidity.average}</strong></p>
                        </div>
                    </div>
                    <div>
                        <p>Temperature</p>
                        <div className='d-flex flex-column temperature-container'>
                            <p id="f-degrees">°F: Max. <strong>{weather[index].temperature.maximumF}</strong> - Min. <strong>{weather[index].temperature.minimumF}</strong></p>
                            <p id="c-degrees">°C: Max. <strong>{weather[index].temperature.maximumC}</strong> - Min. <strong>{weather[index].temperature.minimumC}</strong></p>
                            <p id="k-degrees">K: Max. <strong>{weather[index].temperature.maximumK}</strong> - Min. <strong>{weather[index].temperature.minimumK}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardComponent;