import React from 'react';

export default function CurrentTemp() {
  return (
    <div className="current-temperature">
      <div className="icon-container">
        <img
          src="http://openweathermap.org/img/wn/10d@4x.png"
          className="current-temperature__icon"
          alt=""
        />
      </div>
      <div className="content-container">
        <div className="value">21&deg;</div>
        <div className="summary">Mostly Sunny</div>
      </div>

      <style jsx>{`
        .current-temperature {
          display: flex;
          margin-top: 0.25em;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        .icon-container {
          text-align: center;
        }

        .content-container {
          text-align: center;
          margin-right: 2rem;
        }

        .icon {
          width: 10.5em;
        }

        .value {
          font-size: 5.25em;
          font-weight: 300;
        }

        .summary {
          margin-top: -0.5em;
          margin-left: -0.6em;
          text-align: center;
          font-size: 1.125em;
        }
        @media screen and (min-width: 700px) {
          .current-temperature,
          .current-stats {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
}
