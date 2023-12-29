import React, {useCallback, useState} from 'react';
import "./index.css"
import humidityImg from "../../assets/humidity.png"
import windImg from "../../assets/wind.png"
import useGetWeatherData from "../../hooks/useGetWeatherData";

const WeatherStatus = ({city}) => {
    const data = useGetWeatherData(city);
    const [isCelsius, setIsCelsius] = useState(true);
    const handleChangeScale = useCallback(() => {
        setIsCelsius((prev) => !prev)
    }, [])
    const temp = isCelsius ? (data?.main?.feels_like - 273.15).toFixed(0) + "°C" : (((data?.main?.feels_like * 9) / 5) - 459.67).toFixed(0) + "°F"
    return (

        <div className="weatherStatusContianer">
            <img height={150} width={150} src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                 alt="state"/>
            <div onClick={handleChangeScale} className="weatherData">
                <div
                    className="temperature">{temp}
                </div>
                <div className="city">{data?.name}</div>
            </div>

            <div className="details">
                <div className="weatherConditions">
                    <img className="test" alt="humidity" src={humidityImg} width={30} height={30}/>
                    <div className="weatherConditionsDetails">
                        <div className="sizer">{data?.main?.humidity}%</div>

                        <div>Humidity</div>
                    </div>
                </div>
                <div className="weatherConditions">
                    <img alt="wind" src={windImg} width={30} height={30}/>
                    <div className="weatherConditionsDetails">
                        <div className="sizer">{data?.wind?.speed?.toFixed(0)} km/h</div>
                        <div>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default WeatherStatus;
