import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <div className="m-5">
            <img src="https://i.imgur.com/rbbY1vq.png" alt="profesor" />
            <p class="texto margen">
              <strong>Profesor</strong>
            </p>
            <div className="centrar">
              <a href="none" class="btn btn-secondary btn-lg texto">
                Ingresar
              </a>
            </div>
          </div>

          <div className="m-5">
            <img src="https://i.imgur.com/cdLcAS2.png" alt="profesor" />
            <p class="texto margen">
              <strong>Estudiante</strong>
            </p>
            <div className="centrar">
              <a href="none" class="btn btn-secondary btn-lg texto">
                Ingresar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
