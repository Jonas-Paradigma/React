import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button onClick={toggleMenu} className="burger-icon">
        ☰
      </button>
      {isOpen && (
        <nav id="burger-menu">
          <ul>
            <li>
              <Link to="/favorites">Favoriten ☆</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
