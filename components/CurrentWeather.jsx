import React from 'react';
import CurrentStats from './CurrentStats';
import CurrentTemp from './CurrentTemp';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Loading from './Loading';

export default function CurrentWeather() {
  const { data } = useContext(AppContext);

  if (Object.keys(data).length === 0) return <Loading />;

  return (
    <>
      <div>
        <CurrentTemp data={data} />
        <CurrentStats data={data} />
      </div>
      <style jsx>
        {`
          div {
            width: 100%;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          @media screen and (min-width: 700px) {
            div {
              max-width: 700px;

              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  );
}
