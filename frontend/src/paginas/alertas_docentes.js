import React, { Component } from "react";
import Header from "../componentes/header";
import Alertasd from "../componentes/alertasDocentes";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class alertasp extends Component {
  state = {
    alertas: []
  };

  componentDidMount() {
    fetch(
      `https://backend.nekkoo.repl.co/api/alertas/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          alertas: res
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen colorEstudiantes">
          <h1>Estudiantes</h1>
        </div>

        <div className="centrar margen">
          <h2>{this.state.alertas.length}</h2>
        </div>
        {this.state.alertas.map((e) => {
          return <Alertasd key={e.id_alerta} data={e} />;
        })}

        <div className="centrar">
          <img src="https://i.imgur.com/bGiXQAR.png" alt="escudo" />
        </div>
      </div>
    );
  }
}

export default alertasp;
