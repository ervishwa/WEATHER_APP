import React, { useContext, useEffect ,useState} from 'react'
import axios from "axios"
import "./WeatherCard.css"

export function WeatherCard({place}) {
  
  const[citydata,setCitydata] = useState({});
  const city = place;
  const appkey = "bb09bc92e46d53afc0bf14ea998a6dd1";
  const unit = "metric";
  const limit = 1;
  //calling api by name
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appkey + "&units=" + unit + ""
  //api for finding lon and lat by city name.
  const url2 = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=" + limit + "&appid=" + appkey + ""
  let lon = "st";
  let lat = "ka";
  //calling api by lon and lan.
  const url3 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appkey + ""
  
  //console.log(lon , lat);
  //calling api for finding lon and lat by name.
   const getlanlog = async()=>{
    const longlat = await axios.get(url2);
     lon = longlat.data[0].lon;
     lat = longlat.data[0].lat;
     console.log(lon,lat);
     console.log(longlat);
   }
   
  
   const getdata = async()=>{
    const data = await axios.get(url);
    console.log("api calling")
    //console.log(data);
    const newobj = {
      "temp" : data.data.main.temp,
      "description" :data.data.weather[0].description,
      "img" : "http://openweathermap.org/img/wn/" + data.data.weather[0].icon + "@2x.png",
      "hightemp" : data.data.main.temp_max,
      "lowtemp" : data.data.main.temp_min,
    }
    setCitydata(citydata =>({
      ...citydata,...newobj
    }));
    
   }
   console.log(citydata);



    useEffect(()=>{
      console.log("use start")
    if(place){
      getlanlog();
      getdata();
    }
    else{
      navigator.geolocation.getCurrentPosition((position)=>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getda
           console.log("hai");
      });
    }
    
    },[place])



  return (
    <div className='Weathercard'>
      <h4>{place}</h4>
       {citydata.temp}°
       <br></br>
       { <img src={citydata.img}></img> }
       <br></br>
       {citydata.description}
       <br></br>
       <span>H:</span>{citydata.hightemp}°
       <span>L:</span>{citydata.lowtemp}°
    </div>
  )
}

