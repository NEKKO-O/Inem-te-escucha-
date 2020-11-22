import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Elementop extends Component {
  render() {
    return (
      <div>
        <div className="centrar margen">
          <div>
            <h1 class="margen">Correo: *INSERTAR*</h1>
            <h1 class="margen">Telefono: *INSERTAR*</h1>
            <h1 class="margen">Bloque: *INSERTAR*</h1>
            <h1 class="margen">Salón: *INSERTAR*</h1>
            <div className="centrar">
              <a
                href="login_estudiantes.html"
                class="btn btn-danger btn-lg texto"
              >
                ¡Alertar!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elementop;
