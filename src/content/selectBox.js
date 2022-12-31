import {useContext} from 'react'
import {CityContext} from '../data/citys'
import cityData from '../data/city.list.json';

export default function SelectBox() {
    const {city, setCity} = useContext(CityContext);
    
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <select className="select" value={city} onChange={handleChange}>
            {cityData.map((city)=>{
                return <option id={city.id} key={city.id}>{city.name}</option>
            })}        
        </select>
            
    )
}
