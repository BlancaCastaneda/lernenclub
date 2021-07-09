import { Link } from 'react-router-dom';
import React from 'react';
import './Principal.css';
import img01 from './img01.jpg';
import img02 from './img02.jpg';
import img03 from './img03.jpg';


function Principal(){
    return(
        <div>
            <div className="titulomatricula">
				<div>
					<h2 className="matricula">MATRÍCULAS ABIERTAS</h2>
                </div>
		    </div>
       
            <div className="principal">
                <article className="cajap">
                            <Link to="/Contactenos" ><img src={img01} alt="imagen de piano"/></Link>   
                            <Link to="/Contactenos" className="separador">Piano</Link>
                </article>
 
                <article className="cajap">
                    <Link to="/Contactenos" ><img src={img02} alt="imagen de planes"/></Link>
                    <Link to="/Contactenos" className="separador">Planes</Link>                    
                </article>
 
                <article className="cajap">
                    <Link to="/Contactenos" ><img src={img03} alt="imagen de ingles"/></Link> 
                    <Link to="/Contactenos" className="separador">Inglés</Link>
                </article>     
            </div>
        </div>
    );
}
export default Principal;