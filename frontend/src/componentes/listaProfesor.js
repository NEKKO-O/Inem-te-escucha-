import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Cardp extends Component {
  render() {
    return (
      <div>
        <div className="card ">
          <div className="card-body datosDocente p-3 ml-5">
            <h4 className="card-title">{this.props.data.nombre}</h4>
            <h5 className="card-text">{this.props.data.asignatura}</h5>
            <a
              href={`/cartap/${this.props.data.id_profesor}`}
              className="btn btn-outline-light"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardp;
