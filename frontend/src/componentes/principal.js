import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Principal extends Component {
  render() {
    return (
      <div>
        <div className="centrar">
          <img
            className="tamañoImagen"
            src="https://i.imgur.com/BeSmTFb.png"
            alt="logo"
          />
        </div>

        <div className="centrar">
          <h1 style-prop="font-size: 1px;">INEM Te Escucha</h1>
        </div>

        <div className="centrar">
          <p className="texto margen">
            INEM te escucha es una plataforma que ayuda a comunicarnos mejor con
            nuestros profesores.
          </p>
        </div>

        <div className="centrar">
          <img
            className="tamañoFoto"
            src="https://i.imgur.com/x6OYRW7.jpg"
            alt="foto"
          />
        </div>

        <div className="centrar">
          <a href="/login" className="btn btn-secondary bnt-lg texto">
            Ingresar
          </a>
        </div>
      </div>
    );
  }
}

export default Principal;
