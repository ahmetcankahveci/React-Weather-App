import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import City from './city';

function App() {
  const key = "YourApiKey"; //Apiyi aldığım site:https://openweathermap.org/
  const [city, setCity] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  console.log(search);
  return (
    <div className="App">
      <div className='mb-3 pt-0'>
          <input 
            onChange={(e) => setSearch(e.target.value)} 
            type="text" 
            placeholder="Placeholder" 
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div> 
      <City city={city} />
    </div>
  );
}

export default App;
