import React, { Component } from "react";
import Header from "../componentes/header";
import Cardp from "../componentes/listaProfesor";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Listad extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="centrar docentes margen">
          <h1>Lista de docentes</h1>
        </div>

        <div>
          <Cardp />
        </div>
      </div>
    );
  }
}

export default Listad;
