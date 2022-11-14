import Date from './components/date.js';
const API_KEY = '12f3ae03f3e1f057221b0b8f415da85b';
import {
  cButton,
  fButton,
  title__temp,
  weather__type,
  cloud__type,
  city__value,
} from './constants.js';

const fetchWeather = (callback) => {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      updateUi(data);
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

Date();

const updateUi = (data) => {
  console.log(data);
  title__temp.textContent = `${
    unit === 'c' ? Math.round(data.main.temp - 273.15) : data.main.temp
  }°`;
  weather__type.textContent = `☁️ Mostly ${data.weather[0].main}`;
  cloud__type.textContent = `🌡️ Feels Like ${
    unit === 'c' ? Math.round(data.main.feels_like - 273.15) : data.main.feels_like
  }°C`;
  city__value.textContent = `${data.name}, ${data.sys.country}`;
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
};

cButton.addEventListener('click', toggleUnit);
fButton.addEventListener('click', toggleUnit);
