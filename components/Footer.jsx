import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
        <a
          href="https://github.com/andresbonett/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          created by andres bonett
        </a>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
