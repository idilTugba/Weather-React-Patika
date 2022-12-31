import CityProvider from './data/citys';
import Content from './content/';
import { WeatherProvider } from './data/weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <Content></Content>
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}


export default App;
