import React from 'react';

export default function Weather() {
  return (
    <>
      <div>
        <h1>Bogota, CO</h1>
        <div>Sunday 10th January</div>
      </div>

      <style jsx>{`
        div {
          width: 100%;
        }

        h1 {
          margin: 0;
          font-size: 2em;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
