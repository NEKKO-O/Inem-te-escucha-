import React, { Component } from "react";
import Header from "../componentes/header";
import Docente from "../componentes/docente";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Interfaz_p extends Component {
  render() {
    return (
      <div>
        <Header />
        <Docente />
        <div className="centrar mt-5">
          <a href="none" class="btn btn-danger btn-lg texto">
            Alerta de estudiantes
          </a>
        </div>

        <div className="centrar">
          <img
            class="margen"
            src="https://i.imgur.com/bGiXQAR.png"
            alt="escudo"
          />
        </div>
      </div>
    );
  }
}

export default Interfaz_p;
