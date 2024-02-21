

const apiKey='4ddf7877144ff34bff809ff4a60d7d88';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&timezone=Z prameter&q=';
let city=document.querySelector('#city_name');
let searchBtn=document.querySelector('#searchbt')
let weathericon=document.querySelector('#icon');
async function checkWeather(city){
    const resp = await fetch(apiUrl+`${city}&appid=${apiKey}`);
    var data= await resp.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+'°C';
    document.querySelector(".speed").innerHTML=data.wind.speed+'km/h';
    document.querySelector(".humid").innerHTML=data.main.humidity+"% Humid";
    document.querySelector(".condition").innerHTML=data.weather[0].main;
    console.log(data);
    if(data.weather[0].main=='Clouds'){
        weathericon.src='output-onlinegiftools (5).gif'

    }
    else if(data.weather[0].main=='Rain'){
        weathericon.src='output-onlinegiftools (3).gif'
    }
    else if(data.weather[0].main=='Drizzle'){
        weathericon.src='output-onlinegiftools (4).gif'
    }
    else if(data.weather[0].main=='Clear'){
        weathericon.src='output-onlinegiftools (6).gif'
    }
    if (data.main && data.main.temp < 1 && data.weather && data.weather.length > 0) {
        weathericon.src = 'output-onlinegiftools (7).gif';
    }
    else if(data.weather[0].main=='Mist'){
        weathericon.src='output-onlinegiftools (7).gif'
    }
    
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(city.value);
});

