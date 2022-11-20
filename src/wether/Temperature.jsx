import React, { useEffect, useState } from 'react'
import WetherCard from './WetherCard';
// import axios from 'axios';
export default function Temp() {

const [searchValue, setSearchvalue] = useState("faisalabad");
  const [temperature, setTemperature] = useState({});

const getwetherinfo = async() => {
    try {
      const url = (`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=27f347816e59fcb8b97927b2379fab7a`);
      const res = await fetch(url)
      const data = await res.json();
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
    
      alert('something went wrong, try again');
    }
 }

   useEffect(() => {getwetherinfo()}, []);
  return (
    <>
    <div className='wrap'>
      {/* <form action=""> */}
        <div className='search'></div>
      {/* </form> */}
     dfd
     <input type="search" placeholder='search...' id='search' className='searchTerm' value={searchValue} 
      onChange={(e) => setSearchvalue(e.target.value)}/>
     <button className='searchButton' type='button' onClick={getwetherinfo}>search</button>
    </div>
 
 <WetherCard propetempperature={temperature}/>

</>
  )
}
