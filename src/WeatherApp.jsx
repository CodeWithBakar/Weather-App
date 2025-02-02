import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
  let [weatherInfo , setWeatherInfo] = useState({
    city:"lahore",
    temp:24.23 , 
    humidity:80 , 
    feels_like:34.15 , 
    temp_max:40 , 
    temp_min:20 , 
    weather:"Scattered Clouds"
  })

  let updateInfo = (results)=>{
    setWeatherInfo(results)
  }
  return(
    <div>
      <h1 style={{textAlign:"center"}}>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}