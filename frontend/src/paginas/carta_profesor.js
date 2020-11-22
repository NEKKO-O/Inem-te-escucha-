import React, { Component } from "react";
import Header from "../componentes/header";
import Docente from "../componentes/docente";
import Elementop from "../componentes/elemento_profesor";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Cartap extends Component {
  render() {
    return (
      <div>
        <Header />
        <Docente />
        <Elementop />
      </div>
    );
  }
}

export default Cartap;
