import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="back-button">
      <Link to="/" className="back-link">
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
