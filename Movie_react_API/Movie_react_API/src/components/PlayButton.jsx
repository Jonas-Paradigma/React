import React from "react";

const PlayButton = () => {
  return (
    <div className="play-button-container">
      <a
        href="https://www.netflix.com/at/Login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="play-button">▶ PLAY NOW</button>
      </a>
    </div>
  );
};

export default PlayButton;