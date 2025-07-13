import { useState } from "react";
import Infobox from "./Infobox";
import Searchbox from "./Searchbox";
import "./weatherapp.css";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({

        city: "Delhi",
        temp: 28,
        tempMin: 28,
        tempMax: 29,
        humidity: 47,
        feelsLike: 24.84,
        weather: "Haze"

    })

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (<div className="weatherapp">

        <Searchbox updateInfo={updateInfo} />
        <Infobox info={weatherInfo} />
    </div>)
}
