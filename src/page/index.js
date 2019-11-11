import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeeksDetail from "./WeeksDetail";
import CityDetail from "./CityDetail";

const APIXU =
  "http://api.weatherstack.com/current?access_key=96c64b5837e59f09ae6d8d56f134fc63&query=";

const API = `http://api.openweathermap.org/data/2.5/weather?id=6619279&APPID=2d8913a5d45c3cca163e0800b1431113`;

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Sydney");

  const getWeatherData = APIXU => {
    return fetch(`${APIXU}+${city}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const saveData = () => {
    getWeatherData(APIXU).then(data => {
      setWeatherData(data);
    });
  };

  const handleChange = name => event => {
    setCity(event.target.value);
    console.log(city);
  };

  useEffect(() => saveData(), [city]);
  return (
    <Container>
      <Containerweather>
        <Left>
          {weatherData && weatherData.current && (
            <div>
              <CityDetail
                data1={weatherData}
                temp={weatherData.current.temperature}
                humidity={weatherData.current.humidity}
                wind={weatherData.current.wind_speed}
                condition={weatherData.current.weather_descriptions[0]}
              />
            </div>
          )}
        </Left>

        <Right>
          <div>
            {" "}
            <strong>
              <h1>{city}</h1>
            </strong>
          </div>
          <div>
            <select
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={handleChange()}
            >
              <option id="6619279" value="Sydney">
                Sydney
              </option>
              <option value="Tokyo">Tokyo</option>
              <option value="Beijing">Beijing</option>
            </select>
          </div>
        </Right>
      </Containerweather>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: stretch;
  max-width: 1200px;
  max-height: 800px;
  min-width: 410px;
  margin: 0 auto;
`;

const Containerweather = styled.div`
  display: flex;
  flex: 6;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffffbf;
  margin: 100px 50px 0 50px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Buttompart = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
  background-color: #ffffffbf;
  margin: 1px 50px 50px 50px;
  justify-content: center;
`;
