import './Footer.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="ppagina"> 
          <p className="parrafo">&copy; Copyright © 2020 - 2021 Las tr3s Operating Company SAS. Todos los derechos reservados. 
            La marca las tr3s es una marca registrada de las tr3s.</p>     
      </div>
    </div>
    );
  }
  
  export default Footer;