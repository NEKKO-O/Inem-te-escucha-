import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <a class="logo Flecha" href="none">
            <img
              class="logos"
              src="https://i.imgur.com/Mi9ls8n.png"
              alt="logo"
            />
          </a>
        </div>

        <div>
          <img
            class="logoINEM"
            src="https://i.imgur.com/vg6waal.png"
            alt="logo"
          />
        </div>

        <div>
          <a class="logo Flecha" href="none">
            <img
              class="logos"
              src="https://i.imgur.com/BRxkOB9.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
