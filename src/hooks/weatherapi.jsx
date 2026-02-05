// Di jadiin hook gara-gara FetchDataonMount.jsx dan FetchDataonStateChange.jsx tabrakan

export const fetchWeatherData = async (country) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b25298676d454e96aae53803242812&q=${country}&aqi=no`)
    .then(res => res.json())
    return response;
}