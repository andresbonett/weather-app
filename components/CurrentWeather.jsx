import React from 'react';
import CurrentStats from './CurrentStats';
import CurrentTemp from './CurrentTemp';

export default function CurrentWeather() {
  return (
    <>
      <div>
        <CurrentTemp />
        <CurrentStats />
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
