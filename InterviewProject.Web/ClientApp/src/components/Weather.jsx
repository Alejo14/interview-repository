import React, { useEffect, useState } from 'react';
import TableComponent from './Table-Component/TableComponent';
import CardComponent from './Card-Component/CardComponent';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("New York");
  const [isDay, setIsDay] = useState(true);
  const [hasError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [index, setIndex] = useState(0);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateLocation = (location) => {
    setIsInvalid((invalid) => invalid = false);
    const regex = /(?:^|\s)[\s\\\/"\:';,.\-\_()*+{}[\]|'?¿¡!°¬\^#%&\$<>=]+(?:$|\s)/gi
    const newLocation = location.replace(regex, "");
    if(newLocation === "") {
      setIsInvalid((invalid) => invalid = true);
      return null;
    }
    return newLocation;
  }

  const formatName = (regex) => (name) => {
    const aux = name.replace(regex, (match) => " " + match);
    return aux.slice(0, 1).toUpperCase() + aux.slice(1);
  };

  const getTableInformation = (forecast, isDay) => {
    const allEntries = Object.entries(forecast).filter((el) => el[0] !== "day" && el[0] !== "night" && el[0] !== "location");
    const dayOrNightEntries = isDay ? Object.entries(forecast.day) : Object.entries(forecast.night);
    allEntries.splice(1, 0, ...dayOrNightEntries.filter(el => el[0] !== "icon"));
    return allEntries;
  }

  const tableHeaders = (forecast, isDay) => {
    const upperRegex = /[A-Z]/;
    const entries = getTableInformation(forecast, isDay);
    const newHeaders = entries.map(entry => entry[0]).map(el => {
      const displayName = formatName(upperRegex)(el);
      return { name: el, displayName }
    });
    setHeaders((headers) => headers = [... newHeaders]);
  }

  const tableData = (forecasts, isDay) => {
    const entries = forecasts.map(forecast => Object.fromEntries(getTableInformation(forecast, isDay)));
    entries.forEach(entry => {
      entry.date = entry.date.split("T")[0];
      entry.precipitation = `${entry.precipitation.hasPrecipitation ? entry.precipitation.precipitationIntensity + " " : ""}${entry.precipitation.precipitationType}`;
      entry.relativeHumidity = entry.relativeHumidity.average;
      entry.temperature = `Min. ${entry.temperature.minimumF} & Max. ${entry.temperature.maximumF}`;
      entry.wind = `${entry.wind.windSpeed} ${entry.wind.windDirection}`;
    });
    setData((data) => data = [...entries]);
  }

  const resetError = () => {
    setError((hasError) => hasError = false);
    setErrorMsg((errorMsg) => errorMsg = "");
  }

  const displayError = (err) => {
    setError((hasError) => hasError = true);
    setErrorMsg((errorMsg) => errorMsg = "Please standby! An error occurred and the team is looking at it at the moment. Please retry later!");
    setWeather((weather) => weather = []);
    console.error(err);
  }
  
  const processData = async (location) => {
    setLoading((loading) => loading = true);
    try {
      resetError();
      const apiResponse = await fetch(`weatherforecast/GetFiveDayForecast?city=${location}`);
      const content = await apiResponse.json();
      tableHeaders(content[0], isDay);
      tableData(content, isDay);
      setWeather((weather) => weather = [...content]);
    } catch (err) {
      displayError(err);
    }
    setLoading((loading) => loading = false);
  }

  const handlekeyDown = (key, target) => {
    if(key === "Enter") {
      setLocation((location) => location = target.value);
    }
  }

  const handleChange = () => {
    setLoading((loading) => loading = true);
    const currentTime = !isDay;
    setIsDay(isDay => isDay = currentTime);
    try {
      resetError();
      tableHeaders(weather[0], currentTime);
      tableData(weather, currentTime);
    } catch (err) {
      displayError(err);
    }
    setLoading((loading) => loading = false);
  }

  const handleClick = () => {
    const value = document.getElementById("search").value;
    setLocation((location) => location = value);
  }

  const handleCallback = (newIndex) => {
    setIndex((index) => index = newIndex);
  }

  useEffect(() => {
    const validatedLocation = validateLocation(location);
    if(validatedLocation) {
      processData(validatedLocation);
    }
  }, [location])

  return (
    <section className='background-section'>
      <div className={!isDay ? "background-night" : "background-day"}></div>
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <search className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <div className="input-group flex-nowrap mr-2">
              <input className={!isInvalid ? "form-control": "form-control is-invalid"} id="search" type="search" placeholder="Buscar por ciudad" onKeyDown={({key, target}) => handlekeyDown(key, target)} />
              <div className="input-group-append">
                <span id="search-btn" className="input-group-text" onClick={handleClick}>Buscar</span>
              </div>
            </div>            
            <div className="custom-control custom-switch">
              <input className="custom-control-input" type="checkbox" role="switch" id="dayOrNight" defaultChecked="true" onChange={handleChange}/>
              <label className="custom-control-label" htmlFor="dayOrNight">{ isDay ? "Day" : "Night" }</label>
            </div>
          </div>
        { !isInvalid ? <></> : <p id="invalid" className="invalid-feedback display">Please provide a valid location.</p>}
        <div className='mb-4'></div>
        {
          !loading ? 
            <div>
              <h2>{weather.length === 0 ? "" : weather[0].location}</h2>
              <TableComponent headers={headers} data={data} hasError={hasError} errorMsg={errorMsg} callBackClick={handleCallback}></TableComponent>
              { weather.length !== 0 ? <CardComponent weather={weather} index={index} isDay={isDay}></CardComponent>: <></> }
            </div>
          : 
            <p><em>Laoding...</em></p>
        }
        </search>
      </div>
    </section>
  )
}

export default Weather;