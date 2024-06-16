import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./Nav.module.css";
const Nav2 = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className={style.navTop}>
        <h2 className="parrafos">Texto header top</h2>
      </div>
      <nav
        className={`navbar navbar-expand-lg bg-tertiary p-3 fixed ${style.nav}`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className={style.logo} src={logo} alt="logo" />
          </a>
          <button
            className={`navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            {" "}
            <ul class="navbar-nav ms-auto text-start menu">
              <li className={`nav-item mx-3`}>
                <a className={` ${style.li}`} href="#">
                  Inicio
                </a>
              </li>
              <li className={`nav-item mx-3`}>
                <a className={` ${style.li}`} href="#">
                  Sección 2
                </a>
              </li>
              <li className={`nav-item mx-3`}>
                <a className={` ${style.li}`} href="#">
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

export default Nav2;
