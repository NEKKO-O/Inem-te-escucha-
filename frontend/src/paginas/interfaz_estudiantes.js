import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Interfaze extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <div className="centrar">
            <img
              styleProp="width: 180px; height: 180px;"
              src="https://i.imgur.com/cdLcAS2.png"
              alt="profesor"
            />
            <div
              styleProp="border-radius: 5px;"
              className="datosDocente p-3 ml-5"
            >
              <h1>NOMBRE ESTUDIANTE</h1>
            </div>
          </div>
        </div>

        <div className="centrar mt-5">
          <a href="none" class="btn btn-danger btn-lg texto">
            Lista de maestros
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

export default Interfaze;
