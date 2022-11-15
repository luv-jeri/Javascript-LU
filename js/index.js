import _Date from './components/date.js';
const API_KEY = '12f3ae03f3e1f057221b0b8f415da85b';
import {
  cButton,
  fButton,
  title__temp,
  weather__type,
  cloud__type,
  city__value,
  current__unit,
  daily__container,
} from './constants.js';
import DailyCard from './UI/daily_card.js';

const fetchWeather = () => {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );

      const newData = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      );
      const { daily } = newData.data;

      updateUi(data);
      updateDaily(daily);
    },
    (error) => {
      console.log('error', error);
    },
    {
      enableHighAccuracy: true,
    }
  );
};

let unit = 'c';

_Date();

const arrDailyCard = [];

const updateDaily = (data) => {
  daily__container.innerHTML = '';

  data.forEach((day) => {
    const { temp, dt } = day;
    const { min, max } = temp;
    const date = new Date(dt * 1000);
    const day_ = date.toLocaleString('en-us', { weekday: 'short' });

    const dailyCard = new DailyCard(day_, min, max, unit);
    
    arrDailyCard.push(dailyCard);
    dailyCard.render(daily__container);
  });
};

const updateUi = (data) => {
  console.log(data);
  const { name, sys } = data;
  const { temp, feels_like, temp_min, temp_max } = data.main;

  let temp_ = 0;
  let feels_like_ = 0;

  if (unit === 'c') {
    temp_ = Math.round(temp - 273.15);
    feels_like_ = Math.round(feels_like - 273.15);
    current__unit.innerHTML = 'C';
  } else if (unit === 'f') {
    temp_ = Math.round((temp - 273.15) * (9 / 5) + 32);
    feels_like_ = Math.round((feels_like - 273.15) * (9 / 5) + 32);
    current__unit.innerHTML = 'F';
  } else {
    temp_ = Math.round(temp);
    feels_like_ = Math.round(feels_like);
    current__unit.innerHTML = 'K';
  }

  title__temp.textContent = `${temp_}°`;
  weather__type.textContent = `☁️ Mostly ${data.weather[0].main}`;
  cloud__type.textContent = `🌡️ Feels Like ${feels_like_}°${unit.toUpperCase()}`;
  city__value.textContent = `${name}, ${sys.country}`;
};

fetchWeather();

const toggleUnit = (e) => {
  const el = e.target;
  const data = el.getAttribute('data');
  unit = data;

  fetchWeather();

  if (data === 'c') {
    cButton.classList.add('unit_selected');
    fButton.classList.remove('unit_selected');
  } else {
    fButton.classList.add('unit_selected');
    cButton.classList.remove('unit_selected');
  }

  arrDailyCard.forEach((card) => {
    card.switchUnit(data);
  })
};

cButton.addEventListener('click', toggleUnit);
fButton.addEventListener('click', toggleUnit);
