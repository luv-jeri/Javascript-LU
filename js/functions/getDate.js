const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDate = () => {
  const today = new Date();

  const dayNumber = today.getDay(); // 0-6
  const dayName = dayList[dayNumber];

  const monthNumber = today.getMonth(); // 0-11
  const monthName = monthList[monthNumber];

  const date = today.getDate(); // 1-31

  const year = today.getFullYear(); // 2021

  const time = today.toLocaleTimeString();

  return {
    dayName,
    monthName,
    date,
    year,
    time,
  };
};

export default getDate;
