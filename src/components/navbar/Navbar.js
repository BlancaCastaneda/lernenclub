import './Navbar.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      
          <ul type="none" className="menu">
              
              <li className="item">
                <Link to="/"><i className="fa fa-magic"></i> Inicio</Link>
              </li>

              <li className="item">
                <Link to="/nuestroclub"><i className="fa fa-group"></i> Nuestro Club</Link>
              </li>

              <li className="item">
              <Link to="#"><i class="fa fa-cogs"></i> Servicios Adicionales</Link>
                <ul>
                <li ><Link to="#">Clases de Piano</Link></li>
                <li><Link to="#">Clases de Ingles</Link></li>
                
                </ul>
              </li>

              <li className="item">
                <Link to="/planes"><i class="fa fa-tags"></i> Planes</Link>
              </li>

              <li className="item">
                <Link to="/contactenos"><i class="fa fa-map-marker"></i> Contactenos</Link>
              </li>
             
            </ul>
   
      
    </div>
  );
}

export default Navbar;