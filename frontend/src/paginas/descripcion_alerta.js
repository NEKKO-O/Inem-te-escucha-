import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Descripciona extends Component {
  state = {
    descripcion: ""
  };

  onCreate = () => {
    fetch("https://backend.nekkoo.repl.co/agregar/agregaralerta", {
      method: "POST",
      body: JSON.stringify({
        alerta: 3,
        id_profesor: this.props.match.params.id,
        descAlerta: this.state.descripcion
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.location.href = "../";
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <form>
            <div className="form-group texto">
              <label htmlFor="exampleFormControlTextarea1">
                Escribir de forma detallada el problema que tiene para que su
                docente lo reciba
              </label>
              <textarea
                className="form-control"
                name="descripcion"
                onChange={this.onChange}
                value={this.state.descripcion}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button
                type="button"
                onClick={this.onCreate}
                class="btn btn-outline-primary mt-3"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Descripciona;
