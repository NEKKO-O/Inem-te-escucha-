import React, { Component } from "react";
import Header from "../componentes/header";
import Principal from "../componentes/principal";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Inicio extends Component {
  render() {
    return (
      <div>
        <Header />
        <Principal />
      </div>
    );
  }
}

export default Inicio;
