import Head from 'next/head';
import Layout from '../components/Layout';
import Weather from '../components/Weather';
import CurrentWeather from '../components/CurrentWeather';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Weather />
        <CurrentWeather />
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
  );
}
