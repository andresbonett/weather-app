import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function GeoLacation() {
  const { setLocation } = useContext(AppContext);

  const handleClick = e => {
    e.preventDefault();
    if (!navigator.geolocation) {
      setActive(false);
      return;
    }

    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      setLocation({
        lng: longitude,
        lat: latitude,
      });
    };

    const error = () => {
      console.log('Not Geo');
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <>
      <button onClick={handleClick}>Geo</button>
      <style jsx>{`
        button {
          margin-left: 0.5em;
          height: 2.1rem;
        }
      `}</style>
    </>
  );
}
