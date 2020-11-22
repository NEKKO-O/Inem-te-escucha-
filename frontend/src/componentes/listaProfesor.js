import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Cardp extends Component {
  render() {
    return (
      <div>
        <div className="card ">
          <div className="card-body datosDocente p-3 ml-5">
            <h4 class="card-title">Nombre docente</h4>
            <h5 class="card-text">materia</h5>
            <a href="none" class="btn btn-outline-light">
              Ver más
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardp;
