import React, { Component } from "react";
import Header from "../componentes/header";
import Cardp from "../componentes/listaProfesor";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Listad extends Component {
  state = {
    res: []
  };

  componentDidMount() {
    fetch(`https://backend.nekkoo.repl.co/api/profesores`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          res: res
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />

        <div className="centrar docentes margen">
          <h1>Lista de docentes</h1>
        </div>

        <div>
          {this.state.res.map((e) => {
            return <Cardp data={e} />;
          })}
        </div>
      </div>
    );
  }
}

export default Listad;
