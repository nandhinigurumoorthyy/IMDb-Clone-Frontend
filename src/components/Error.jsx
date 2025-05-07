import React from 'react';
import errorGif from '../assets/error.gif'; 

const Error = () => {
  return (
    <div className="error-page">
      <img src={errorGif} alt="Error" className="error-gif" />
    </div>
  );
};

export default Error;
