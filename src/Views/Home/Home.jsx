import React from "react";
import style from "./Home.module.css";
import cohete from "../../assets/img/cohete.png";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.backgroundImage}>
        <div className={style.content}>
          <h2 className="textoPrevio text-white mb-3">
            Texto previo al título
          </h2>
          <h2 className={`${style.tituloBanner} mb-5`}>
            Título banner principal
          </h2>
          <button className={`${style.buttonSend} button`}>Enviar</button>
        </div>
      </div>
      <div className={style.cardsComponent}>
        <div className={style.cardsContainer}>
          <div className={style.card}>
            <img className={style.cohete} src={cohete} alt="img cohete" />
            <h2 className="items">Item 1</h2>
            <p className="parrafos">
              Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas
              jeje). Mientras puedes navegar en nuestro sitio antiguo.
            </p>
          </div>
          <div className={style.card}>
            <img className={style.cohete} src={cohete} alt="img cohete" />
            <h2 className="items">Item 1</h2>
            <p className="parrafos">
              Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas
              jeje). Mientras puedes navegar en nuestro sitio antiguo.
            </p>
          </div>
          <div className={style.card}>
            <img className={style.cohete} src={cohete} alt="img cohete" />
            <h2 className="items">Item 1</h2>
            <p className="parrafos">
              Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas
              jeje). Mientras puedes navegar en nuestro sitio antiguo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

