import {WeatherContext} from '../data/weather'
import {useContext} from 'react'

export default function CityResult() {
    const weather = useContext(WeatherContext);
    //editlenecek ama neden??
    return (
        weather !== {} ? weather[0].data.map((item)=>{
            return(
                <div>
                    <img alt={`${item.weather.description}`} src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}/>
                    <p> <span>Max </span>{Math.round(item.app_max_temp)}</p>
                    <p> <span>Min </span>{Math.round(item.app_min_temp)}</p>
                </div>
            )
        }) : null
    )
}
