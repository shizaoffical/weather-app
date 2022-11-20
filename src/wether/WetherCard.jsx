import React, { useEffect, useState } from 'react'

export default function WetherCard(props) {
       const [wethermoodstate, setWethermoodstate] = useState("");
        const {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
          } = props.propetempperature;
        //   wether mood and change wether icons
        useEffect(() => {
            if (weathermood) {
              switch (weathermood) {
                case "Clouds":
                    setWethermoodstate("wi-day-cloudy");
                  break;
                case "Haze":
                    setWethermoodstate("wi-fog");
                  break;
                case "Clear":
                    setWethermoodstate("wi-day-sunny");
                  break;
                case "Mist":
                    setWethermoodstate("wi-dust");
                  break;
        
                default:
                    setWethermoodstate("wi-day-sunny");
                  break;
              }
            }
          }, [weathermood]);
        //   sunset time
          let sec = sunset;
          let date = new Date(sec * 1000);
          let timestr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
    
    <articule className="widget">
        <div className='weatherIcon'> <i className={`wi ${wethermoodstate}`}></i></div>
        <div className='weatherInfo' >
            <div className='temperature'><h6>{temp}&deg;</h6></div>
            <div className='description '>
                <div className='weatherCondition'></div>{weathermood}
                <div className='place'> {name}, {country}</div>
            </div>
             
        </div>
       <div className='date'> {new Date().toLocaleString()}</div>
       <div className="extra-temp">
          <div className="temp-info-minmax">
                <div className="two-sided-section"><p><i className={"wi wi-sunset"}></i> </p>
                     <p className="extra-info-leftside">{timestr}<br/>Sunset</p>
                </div>
                <div className="two-sided-section"><p><i className={"wi wi-humidity"}></i> </p>
                     <p className="extra-info-leftside"> {humidity}<br />Humidity</p>
                </div>   
           </div>
           <div className='weather-extra-info'>
                   <div className="two-sided-section"> <p><i className={"wi wi-rain"}></i> </p>
                     <p className="extra-info-leftside">{pressure} <br/> pressure </p>
                   </div>
                  <div className="two-sided-section"><p><i className={"wi wi-strong-wind"}></i> </p>
                     <p className="extra-info-leftside"> {speed}<br />   Speed </p>
                  </div> 
           </div>
       </div>

    </articule>
    </>
  )
}
