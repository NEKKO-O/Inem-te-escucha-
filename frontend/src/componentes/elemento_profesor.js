import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Elementop extends Component {
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
          <div>
            <h1 className="margen">Correo: {this.state.res.correo}</h1>
            <h1 className="margen">Telefono: {this.state.res.telefono}</h1>
            <h1 className="margen">Bloque: {this.state.res.bloque}</h1>
            <h1 className="margen">Salón: {this.state.res.salon}</h1>
            <div className="centrar">
              <a
                href={`/descripciona/${this.props.id}`}
                className="btn btn-danger btn-lg texto"
              >
                ¡Alertar!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elementop;
