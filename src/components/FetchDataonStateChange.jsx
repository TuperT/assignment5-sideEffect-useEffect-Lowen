import { useState, useEffect } from "react";
import { fetchWeatherData } from "../hooks/weatherapi";

const FetchDataonStateChange = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [country, setCountry] = useState("Indonesia");

    useEffect(() => {
        // Token gratisan dari weatherapi.com
        fetchWeatherData(country).then(data => setWeatherData(data));
    }, [country]);

    return (
        <>
            <h2>Task 7</h2>
            <p>Check current country weather condition</p>

            <select name="select-country" onChange={(e) => setCountry(e.target.value)}>
                <option value="Indonesia">Indonesia</option>
                <option value="Canada">Kanada</option>
                <option value="Japan">Jepang</option>
                <option value="USA">Amerika Serikat</option>
                <option value="Germany">Jerman</option>
                <option value="Australia">Australia</option>
            </select>
            {weatherData && (
                <>
                    <p>Cuaca {country} hari ini</p>
                    <p>Arah mata angin : {weatherData.current?.wind_dir}</p>
                    <p>Temperatur : {weatherData.current?.temp_c}°C</p>
                    <p>Kondisi cuaca : {weatherData.current?.condition?.text}</p>
                </>
            )}
        </>
    );
};

export default FetchDataonStateChange;
