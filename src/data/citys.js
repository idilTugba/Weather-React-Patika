import { createContext, useState} from 'react'
import cityData from './city.list.json';

export const CityContext = createContext();

export default function CityProvider({children}) {
    const [city, setCity] = useState(cityData[0].name);
    
    const values = {
        city,
        setCity
    }
        
    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    )
}
