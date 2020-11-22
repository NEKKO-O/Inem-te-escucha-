import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Interfaze extends Component {
  state = {
    res: {}
  };

  componentDidMount() {
    fetch(
      `https://backend.nekkoo.repl.co/api/buscarestudiante/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          res: res[0]
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <div className="centrar">
            <img
              style={{ width: "180px", height: "180px" }}
              src="https://i.imgur.com/cdLcAS2.png"
              alt="profesor"
            />
            <div
              style={{ borderRadius: "5px" }}
              className="datosDocente p-3 ml-5"
            >
              <h1>{this.state.res.nombre}</h1>
            </div>
          </div>
        </div>

        <div className="centrar mt-5">
          <a href="/listad" className="btn btn-danger btn-lg texto">
            Lista de maestros
          </a>
        </div>

        <div className="centrar">
          <img
            className="margen"
            src="https://i.imgur.com/bGiXQAR.png"
            alt="escudo"
          />
        </div>
      </div>
    );
  }
}

export default Interfaze;
