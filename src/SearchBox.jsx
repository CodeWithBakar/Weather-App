/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherDetails = async () => {
    try {
      let response = await fetch(
        `${import.meta.env.VITE_API_URL}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let results = {
        city_name: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
      };
      console.log(results);
      setError(false);
      return results;
    } catch (err) {
      throw new Error(err);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let updatedInfo = await getWeatherDetails();
      updateInfo(updatedInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>City not found</p>}
      </form>
    </div>
  );
}
