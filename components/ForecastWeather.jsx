import CardWeather from './CardWeather';
import { AppContext } from '../context/AppContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

export default function ForecastWeather() {
  const [data, setData] = useState([]);

  const {
    location: { lng, lat },
    isLoading,
  } = useContext(AppContext);

  useEffect(async () => {
    const API_KEY = '1d58120477152d8c6b5e075a0b4d64f7';
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    try {
      const { data } = await axios.get(API_URL);
      setData(data.daily);
    } catch (error) {
      console.log(error);
    }
  }, [lng, lat]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <h2>Weather of the week</h2>
      {data.map(card => (
        <CardWeather key={card.dt} {...card} />
      ))}

      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: space-around;
          padding: 1em;
          border-top: 1px solid rgba(177, 34, 34, 0.5);
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
