import React from 'react';

export default function CurrentStats({ data }) {
  const {
    main: { humidity, temp_max, temp_min },
    wind: { speed },
  } = data;

  return (
    <div className="current-stats">
      <div>
        <div className="value">{temp_max}&deg;</div>
        <div className="label">High</div>
        <div className="value">{temp_min}&deg;</div>
        <div className="label">Low</div>
      </div>
      <div>
        <div className="value">{speed}km/h</div>
        <div className="label">Wind</div>
        <div className="value">{humidity}%</div>
        <div className="label">humidity</div>
      </div>

      <style jsx>{`
        .current-stats {
          display: flex;
          justify-content: space-around;
          padding-bottom: 1em;
          width: 100%;
          border-top: 1px solid rgba(177, 34, 34, 0.5);
        }
        .value {
          margin-top: 1em;
          font-size: 1.44em;
        }

        .label {
          color: rgba(0, 0, 0, 0.6);
        }
        @media screen and (min-width: 700px) {
          .current-stats {
            width: 50%;
            border-top: none;
            border-left: 1px solid rgba(177, 34, 34, 0.5);
          }
        }
      `}</style>
    </div>
  );
}
