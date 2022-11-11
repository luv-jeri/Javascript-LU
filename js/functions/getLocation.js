
const getLocation = (callback) => {
  const onSuccess = ({ coords }) => {
    const { latitude, longitude } = coords;
    callback(latitude, longitude);
  };

  const onError = (error) => {
    console.error(error);
  };

  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    enableHighAccuracy: true,
  });
};

export default getLocation;
