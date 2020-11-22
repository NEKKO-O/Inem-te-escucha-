import React, { Component } from "react";
import Header from "../componentes/header";
import Form from "../componentes/form";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class login_e extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <div className="m-5">
            <h1 className="centrar">Estudiantes</h1>
            <div className="centrar">
              <img src="https://i.imgur.com/cdLcAS2.png" alt="Estudiante" />
            </div>
            <Form link="e" />
          </div>
        </div>
      </div>
    );
  }
}

export default login_e;
