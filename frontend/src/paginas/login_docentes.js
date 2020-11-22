import React, { Component } from "react";
import Header from "../componentes/header";
import Form from "../componentes/form";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class login_p extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <div className="m-5">
            <h1 class="centrar">Profesores</h1>
            <div className="centrar">
              <img src="https://i.imgur.com/rbbY1vq.png" alt="Estudiante" />
            </div>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default login_p;
