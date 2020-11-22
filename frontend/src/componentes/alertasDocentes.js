import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Alertasd extends Component {
  state = {
    nombre: this.props.data.nombre,
    grado: this.props.data.grado,
    seccion: this.props.data.seccion,
    descripcion: this.props.data.descAlerta
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title margenCard">{this.state.nombre}</h5>
            <p className="card-text textoCard">
              Grado: {this.state.grado} Sección: {this.state.seccion}
            </p>
            <h5 className="card-text">{this.state.descripcion}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Alertasd;
