import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Docente extends Component {
  state = {
    res: {}
  };

  componentDidMount() {
    fetch(`https://backend.nekkoo.repl.co/api/buscarprofesor/${this.props.id}`)
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
    );
  }
}

export default Docente;
