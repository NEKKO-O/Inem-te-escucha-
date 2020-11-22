import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Docente extends Component {
  render() {
    return (
      <div>
        <div className="centrar margen">
          <div className="centrar">
            <img
              styleProp="width: 180px; height: 180px;"
              src="https://i.imgur.com/rbbY1vq.png"
              alt="profesor"
            />
            <div
              styleProp="border-radius: 5px;"
              className="datosDocente p-3 ml-5"
            >
              <h1>NOMBRE DOCENTE</h1>
              <h3>materia</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Docente;
