import React from "react";

const Load = () => {
  return (
    <div className="load-wrapper">
      <div className="load-spinner-group">
        <div className="load-spinner load-spinner-dark"></div>
        <div className="load-spinner load-spinner-light"></div>
        <div className="load-spinner load-spinner-dark"></div>
      </div>
      <div className="load-text">Loading</div>
    </div>
  );
};

export default Load;
