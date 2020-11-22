import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import usuarios_p from "../data/usuarios_profesores.json";
import usuarios_e from "../data/usuarios_estudiantes.json";

class form extends Component {
  state = {
    usuarios_p: usuarios_p,
    usuarios_e: usuarios_e,
    codigo: "",
    contraseña: "",
    codigo: ""
  };

  onLogin = async (e) => {
    if (this.props.link === "p") {
      fetch(`https://backend.nekkoo.repl.co/api/ingresarp/${this.state.codigo}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length > 0) {
            if (this.state.contraseña === res[0].contrasena) {
              this.setState({
                codigo: res[0].id_profesor
              });
              this.navigate();
            }
          }
        });
    } else {
      fetch(`https://backend.nekkoo.repl.co/api/ingresare/${this.state.codigo}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length > 0) {
            if (this.state.contraseña === res[0].contrasena) {
              this.setState({
                codigo: res[0].id_estudiante
              });
              this.navigate();
            } else {
              window.alert("error");
            }
          }
        });
    }
  };

  navigate = () => {
    if (this.props.link === "p") {
      window.location.href = `../interfazp/${this.state.codigo}`;
    } else {
      window.location.href = `../interfaze/${this.state.codigo}`;
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="codigo"
              value={this.state.codigo}
              onChange={this.onChange}
              className="form-control texto"
              id="formGroupExampleInput"
              placeholder="Código"
            ></input>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="contraseña"
              value={this.state.contraseña}
              onChange={this.onChange}
              className="form-control texto"
              id="formGroupExampleInput"
              placeholder="Contraseña"
            ></input>
          </div>

          <div className="form-group centrar">
            <div
              onClick={this.onLogin}
              className="btn btn-secondary btn-lg texto"
            >
              Entrar
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default form;
