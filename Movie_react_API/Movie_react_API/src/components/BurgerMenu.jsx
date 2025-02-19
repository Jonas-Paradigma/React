import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <nav id="burger-menu" className="hidden">
      <ul>
        <li>
          <Link to="/favorites">Favoriten ☆</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
