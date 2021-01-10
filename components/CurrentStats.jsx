import React from 'react';

export default function CurrentStats() {
  return (
    <div className="current-stats">
      <div>
        <div className="value">23&deg;</div>
        <div className="label">High</div>
        <div className="value">14&deg;</div>
        <div className="label">Low</div>
      </div>
      <div>
        <div className="value">7mph</div>
        <div className="label">Wind</div>
        <div className="value">0%</div>
        <div className="label">Rain</div>
      </div>
      <div>
        <div className="value">05:27</div>
        <div className="label">Sunrise</div>
        <div className="value">20:57</div>
        <div className="label">Sunset</div>
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
