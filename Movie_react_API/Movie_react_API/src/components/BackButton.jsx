import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      🡸
    </button>
  );
};

export default BackButton;
