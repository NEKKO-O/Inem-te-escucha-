import React, { Component } from "react";
import Header from "../componentes/header";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Descripciona extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centrar margen">
          <form>
            <div class="form-group texto">
              <label for="exampleFormControlTextarea1">
                Escribir de forma detallada el problema que tiene para que su
                docente lo reciba
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Descripciona;
