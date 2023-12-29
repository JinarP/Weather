import {useEffect, useState} from 'react';
import {getWeatherData} from "../service/weather";
import {toast} from "react-toastify"

const useGetWeatherData = (city) => {
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() => {
        const fetcher = async () => {
            try {

                const data = await getWeatherData(city);
                if (data.ok) {
                    setWeatherData(data);
                } else {

                    toast.warning("Please enter a valid city");
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetcher()
    }, [city])
    return weatherData
};

export default useGetWeatherData;
