
import SearchBar from "./searchBar";
import Info from "./Info";
import { useState } from "react";


export default function WeatherApp() {

    const [weatherData, setWeatherData] = useState({
        city : "delhi",
        feels_like : 41.05,
        humidity : 62,
        temp : 34.05,
        temp_max : 34.05,
        temp_min : 34.05,
        description : "haze"
    });

    function updateInfo(info) {
        setWeatherData(info);
        console.log(info);
    }

    return (
        <div>
            <SearchBar updateInfo={updateInfo}/>
            <br></br><br></br>  
            <Info data={weatherData}/>
        </div>
    )
}