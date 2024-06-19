import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import style from "./Nav.module.css";

const Nav = () => {
  const [selected, setSelected] = useState("Inicio");

  const handleSelect = (section) => {
    setSelected(section);
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className={style.navTop}>
        <h2 className="parrafos">Texto header top</h2>
      </div>
      <nav
        className={`navbar navbar-expand-lg bg-tertiary p-3 fixed ${style.nav}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mb-3 mb-lg-0" href="#">
            <img className={style.logo} src={logo} alt="logo" />
          </a>
          <button
            className={`navbar-toggler mb-3 mb-lg-0 ${style.btnNav}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${style.btnNavIcon}`}></span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto text-start menu">
              <li
                className={`nav-item mx-lg-3 my-3 my-lg-0 ${
                  selected === "Inicio" ? style.active : ""
                }`}
              >
                <a
                  className={` ${style.li}`}
                  href="#"
                  onClick={() => handleSelect("Inicio")}
                >
                  Inicio
                </a>
              </li>
              <li
                className={`nav-item mx-lg-3 my-3 my-lg-0 ${
                  selected === "Sección 2" ? style.active : ""
                }`}
              >
                <a
                  className={` ${style.li}`}
                  href="#"
                  onClick={() => handleSelect("Sección 2")}
                >
                  Sección 2
                </a>
              </li>
              <li
                className={`nav-item mx-lg-3 my-3 my-lg-0 ${
                  selected === "Sección 3" ? style.active : ""
                }`}
              >
                <a
                  className={` ${style.li}`}
                  href="#"
                  onClick={() => handleSelect("Sección 3")}
                >
                  Sección 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
