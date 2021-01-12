import Head from 'next/head';
import Layout from '../components/Layout';
import Weather from '../components/Weather';
import CurrentWeather from '../components/CurrentWeather';
import Loading from '../components/Loading';
import { AppContext } from '../context/AppContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import ForecastWeather from '../components/ForecastWeather';

export default function Home() {
  const {
    location: { lng, lat },
    setData,
    data,
    isLoading,
    SetIsLoading,
  } = useContext(AppContext);

  useEffect(async () => {
    const API_KEY = '1d58120477152d8c6b5e075a0b4d64f7';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    // const API_URL = `api.openweathermap.org/data/2.5/weather?lat=10.55555&lon=-74.33333&appid=1d58120477152d8c6b5e075a0b4d64f7`;
    // const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=hourly&appid=${API_KEY}`;
    try {
      const { data } = await axios.get(API_URL);
      setData(data);
      SetIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [lng, lat]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="container">
        <Head>
          <title>Weather App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {data && (
            <>
              <Weather />
              <CurrentWeather />
              <ForecastWeather />
            </>
          )}
        </Layout>

        <style jsx>
          {`
            .container {
              width: 100%;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            }
          `}
        </style>
      </div>
    </div>
  );
}
