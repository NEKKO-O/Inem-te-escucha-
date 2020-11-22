import React from "react";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// marvel
import Inicio from "./paginas/inicio";
import Login from "./paginas/login";
import Logine from "./paginas/login_estudiantes";
import Loginp from "./paginas/login_docentes";
import Interfazp from "./paginas/interfaz_docentes";
import Alertasd from "./paginas/alertas_docentes";
import Interfaze from "./paginas/interfaz_estudiantes";
import Listad from "./paginas/lista_docentes";
import Cartap from "./paginas/carta_profesor";
import Descripciona from "./paginas/descripcion_alerta";

export default function App() {
  return (
    <div className="App">
      <Inicio />
    </div>
  );
}
