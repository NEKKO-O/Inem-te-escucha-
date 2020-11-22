import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              class="form-control texto"
              id="formGroupExampleInput"
              placeholder="Código"
            ></input>
          </div>

          <div className="form-group">
            <input
              type="password"
              class="form-control texto"
              id="formGroupExampleInput"
              placeholder="Contraseña"
            ></input>
          </div>

          <div class="form-group centrar">
            <button type="submit" class="btn btn-secondary btn-lg texto">
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default form;
