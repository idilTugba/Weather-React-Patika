import {useState, createContext, useContext, useEffect} from 'react'
import axios from 'axios';
import {CityContext} from './citys'

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weather, setWheather] = useState({});

    const {city, setCity} = useContext(CityContext);
    
    useEffect(() => {
        let daysWeather = [];
        axios("https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&key=93d01e6642fd45c49cac833408a1eb83&lang=tr&days=7")
        .then(rson=>{
            daysWeather.push(rson.data);
            setWheather(daysWeather);
        })
    }, [city])

    
    const values = weather;

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

