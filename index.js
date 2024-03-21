const apiKey="067f101bedf66ee30271785fc9921383";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const input=document.querySelector(".input");
const button=document.querySelector(".btn");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error-message").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
     

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="weather-app-img/images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error-message").style.display="none";
} 
    }
    
button.addEventListener("click",()=>{
    checkWeather(input.value);
    
});