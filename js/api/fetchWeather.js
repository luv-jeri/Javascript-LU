const API_KEY = '12f3ae03f3e1f057221b0b8f415da85b';

const fetchData = async (lat, lon) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  return data;
};

export default fetchData;
