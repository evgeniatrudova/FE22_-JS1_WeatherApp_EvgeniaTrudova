const key = 'ab16b850bfaf44758505a0992bd20831';

const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    e.preventDefault();

    const input = document.querySelector('input');
    const urlCurrent = `https://api.weatherbit.io/v2.0/current?city=${input.value}&key=${key}&lang=sv`;
    const urlForecast = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.value}&key=${key}&lang=sv`;
    
    getCurrentWeather(urlCurrent);
    getForecast(urlForecast);
    input.value = '';
})

function getCurrentWeather(url){
    fetch(url).then( 
        res => res.json()
    ).then( 
        data => displayCurrent(data.data[0])
    ).catch( e => console.log(e));
}

function getForecast(url){
    fetch(url).then( 
        res => res.json()
    ).then( data => {
        // console.log(data.data)
        const fiveDayForecast = [];
        for(let i=1; i<6; i++){
            fiveDayForecast.push(data.data[i]);
        }
        displayForecast(fiveDayForecast);
    }).catch( e => console.log(e));
}

function displayCurrent(weather){
    document.querySelector('#current-weather img').src = `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`;
    document.querySelector('#current-city').innerText = weather.city_name;
    document.querySelector('#current-des').innerText = weather.weather.description;
    document.querySelector('#current-temp').innerText = 'Temperatur : ' + weather.temp + '°C';
    document.querySelector('#current-wind').innerText = 'Vind hastighet : ' + Math.round(weather.wind_spd) + ' m/s';
    document.querySelector('#current-hum').innerText = 'Fuktighet : ' + Math.round(weather.rh) + '%';
}

function displayForecast(weather){
    const divs = document.querySelectorAll('#forecast-weather div');
    for(let i=0; i<weather.length; i++){
        divs[i].innerHTML = '';

        const img = document.createElement('img');
        img.src = `https://www.weatherbit.io/static/img/icons/${weather[i].weather.icon}.png`;
        divs[i].appendChild(img);

        const pdes = document.createElement('p');
        pdes.innerText = weather[i].weather.description;
        divs[i].appendChild(pdes);

        const ptemp = document.createElement('p');
        ptemp.innerText = weather[i].temp + '°C';
        divs[i].appendChild(ptemp);
    }
}
