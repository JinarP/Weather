const API_KEY = process.env.REACT_APP_API_KEY;
export const getWeatherData = async (city) => {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const json = await response.json()
        return {...json, ok: response.status !== 404};

    } catch (error) {
        console.log(error)
    }
}