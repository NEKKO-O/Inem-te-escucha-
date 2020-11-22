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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/descripciona/:id" component={Descripciona} />
          <Route path="/cartap/:codigo" component={Cartap} />
          <Route path="/listad" component={Listad} />
          <Route path="/alertasd/:id" component={Alertasd} />
          <Route path="/interfaze/:id" component={Interfaze} />
          <Route path="/interfazp/:id" component={Interfazp} />
          <Route path="/logine" component={Logine} />
          <Route path="/loginp" component={Loginp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Inicio} />
        </Switch>
      </Router>
    </div>
  );
}
