 - https://api.openweathermap.org/data/2.5/weather?q=London&appid=bb09bc92e46d53afc0bf14ea998a6dd1

url - https://api.openweathermap.org/data/2.5/weather
apin key - bb09bc92e46d53afc0bf14ea998a6dd1

fro chqing location access is available or not -  if ("geolocation" in navigator) {
            console.log("Available");
           } else {
              console.log("Not Available");
           }
--------------------------------           

api calling by name of city..

  const city = place;
  const appkey = "bb09bc92e46d53afc0bf14ea998a6dd1";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appkey + "&units=" + unit + ""
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
-----------------------

api calling by lat and lon - 
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

api for finding lat and lon by name-

http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}