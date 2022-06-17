import React from 'react';

const Banner = ({ token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <p>Poner aqui publicidad.</p>
      </div>
    </div>

  );
};

export default Banner;
