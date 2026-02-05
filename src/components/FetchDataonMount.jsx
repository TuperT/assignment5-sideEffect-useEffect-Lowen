import {  useEffect, useState } from "react";
import { fetchWeatherData } from "../hooks/weatherapi";

const FetchDataMount = () => {
    const [weatherData, setWeatherData] = useState("");

    useEffect(() => {
        // Token gratisan dari weatherapi.com
        fetchWeatherData("Indonesia").then(data => setWeatherData(data));
    }, []);

    return(
        <>
            <h2>Task 6</h2>
            <p>Cuaca jakarta hari ini</p>
            <p>Arah mata angin : {weatherData.current?.wind_dir}</p>
            <p>Temperatur : {weatherData.current?.temp_c}°C</p>
            <p>Kondisi cuaca : {weatherData.current?.condition?.text}  </p>
        </>
    )
}

export default FetchDataMount;