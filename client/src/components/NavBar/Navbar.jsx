import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "./NavBar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.navbar}>
      <div className={style.nav_logo}>
        <Link to="/inicio">
          <img className={style.logo_img} src={logo} alt="Logo Reihle" />
        </Link>
      </div>
      <div className={style.nav_itemsContainer}>
        <div
          className={`${style.nav_toggle} ${isOpen && style.openToggle}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link
          className={`${style.nav_items} ${isOpen && style.itemsOpen}`}
          to="/equipo"
        >
          Nuestro equipo
        </Link>
        <Link
          className={`${style.nav_items} ${isOpen && style.itemsOpen}`}
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;