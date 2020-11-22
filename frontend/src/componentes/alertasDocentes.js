import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Alertasd extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 class="card-title margenCard">NOMBRE ESTUDIANTE</h5>
            <p class="card-text textoCard">Grado: (NUMERO) Sección: (NUMERO)</p>
            <h5 class="card-text">DESCRIPCIÓN PROBLEMA...</h5>
            <a href="none" class="btn btn-danger">
              Ver más
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Alertasd;
