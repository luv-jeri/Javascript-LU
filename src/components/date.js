import getDate from '../functions/getDate.js';


const Date = () => {
  console.log('Updating Date');
  const { dayName } = getDate();

  const date_name = document.querySelector('#day__name');
  const time_value = document.querySelector('#timer__value');
  date_name.textContent = `${dayName},`;

  setInterval(() => {
    const { time } = getDate();
    time_value.textContent = time;
  }, 1000);
};

export default Date;
