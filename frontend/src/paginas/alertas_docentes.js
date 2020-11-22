import React, { Component } from "react";
import Header from "../componentes/header";
import Alertasd from "../componentes/alertasDocentes";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class alertasp extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen colorEstudiantes">
          <h1>Estudiantes</h1>
        </div>

        <div className="centrar margen">
          <h2>(NUMERO DE NOTIFICACIONES)</h2>
        </div>

        <Alertasd />

        <div className="centrar">
          <img src="https://i.imgur.com/bGiXQAR.png" alt="escudo" />
        </div>
      </div>
    );
  }
}

export default alertasp;
