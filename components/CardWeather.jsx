import React from "react"

export default function CardWeather({ card }) {
  const {
    dt,
    wind_speed,
    humidity,
    feels_like: { day, eve },
    weather,
  } = card

  // time
  const date = new Date(dt * 1000)
  const formattedDate =
    date.toDateString().slice(0, 4) + "" + date.toDateString().slice(7, 10)

  return (
    <>
      <div className="card">
        <div>{formattedDate}</div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Mostly sunny"
        />
        <div>
          <div className="value">{day}&deg;</div>
          <div className="label">High</div>
        </div>
        <div>
          <div className="value">{eve}&deg;</div>
          <div className="label">Low</div>
        </div>
        <div>
          <div className="value">{wind_speed}km/h</div>
          <div className="label">Wind</div>
        </div>
        <div>
          <div className="value">{humidity}%</div>
          <div className="label">humidity</div>
        </div>
      </div>
      <style jsx>{`
        .card {
          border: rgba(255, 0, 0, 0.171) solid 1px;
          margin-bottom: 0.5em;
          padding: 0.5em;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          font-size: 0.9rem;
        }

        .label {
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </>
  )
}
