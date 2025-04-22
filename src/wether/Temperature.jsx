import React, { useEffect, useState } from 'react'
import WetherCard from './WetherCard';
// import axios from 'axios';
export default function Temp() {

const [searchValue, setSearchvalue] = useState("Faisalabad");
  const [temperature, setTemperature] = useState({});

const getwetherinfo = async() => {
    try {
      const url = (`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=27f347816e59fcb8b97927b2379fab7a`);
      const res = await fetch(url)
      console.log(res);
      const data = await res.json();
      console.log(data)
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys; 
      
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTemperature(myNewWeatherInfo); 
    }
     catch (error) {
      console.log(error)
    
      alert('Spelling Mistake, Try Again');
    }
 }

   useEffect(() => {getwetherinfo()}, []);
  return (
    <>
    <form className='wrap'  >
        <input type="search" placeholder='search...' id='search' className='searchTerm' value={searchValue} 
        onChange={(e) => setSearchvalue(e.target.value)}/>
        {/* <button className='searchButton' type='button' onClick={getwetherinfo}>search</button> */}
        <button className='searchButton' type='button' onClick={getwetherinfo} >search</button>

    </form>
 
 <WetherCard propetempperature={temperature}/>

</>
  )
}
