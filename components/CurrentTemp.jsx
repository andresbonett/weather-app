export default function CurrentTemp({ data }) {
  return (
    <>
      {
        <div className="current-temperature">
          <div className="icon-container">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              className="current-temperature__icon"
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="value">{parseInt(data.main.temp)}&deg;</div>
            <div className="summary">{data.weather[0].description}</div>
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
              font-size: 4.25em;
              font-weight: 400;
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
      }
    </>
  );
}
