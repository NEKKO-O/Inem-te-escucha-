import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Interfaz_p extends Component {
  state = {
    res: {}
  };

  componentDidMount() {
    fetch(
      `https://backend.nekkoo.repl.co/api/buscarprofesor/${this.props.match.params.id}`
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
        <div>
          <div className="centrar margen">
            <div className="centrar">
              <img
                style={{ width: "180px", height: "180px" }}
                src="https://i.imgur.com/rbbY1vq.png"
                alt="profesor"
              />
              <div
                style={{ borderRadius: "5px" }}
                className="datosDocente p-3 ml-5"
              >
                <h1>{this.state.res.nombre}</h1>
                <h3>{this.state.res.asignatura}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="centrar mt-5">
          <a
            href={`/alertasd/${this.props.match.params.id}`}
            className="btn btn-danger btn-lg texto"
          >
            Alerta de estudiantes
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

export default Interfaz_p;
