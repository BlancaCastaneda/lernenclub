import { Link } from 'react-router-dom';
import React from 'react';
import './Contacto.css';
import whatsapp from './whatsapp.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

function Contacto(){
    return(
        <div>
             <section id="contacto">

                <div className="map">
                    <h3>¿Cómo encontrarnos?</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3977.061575536761!2d-74.1049755!3d4.5829676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb94d4852598b934!2sKuepa%20-%20Restrepo!5e0!3m2!1ses-419!2sco!4v1618111203931!5m2!1ses-419!2sco"allowfullscreen="" loading="lazy"></iframe>
                </div>

                <div className="ubicanos">
                    <article className="ubicados">
                        <div className="contactenos">
                            <ul>
								<li><i class="fa fa-map-marker"></i> Dirección: Calle 26 S # 89C - 36 Bogotá D.C. </li>
								<li><i class="fa fa-phone"></i> Teléfono 311 222 33 44 </li>
								<li><i class="fa fa-envelope"></i> E-mail: teachervelasquez@gmail.com</li>
							</ul> 
                        </div>	
                    </article>

                    <article className="cajab">
                        <ol className="redes">
                            <li>
                              <a href="https://www.facebook.com/" ><img className="facebook" src={facebook} alt="pagina facebook"/></a>
                            </li>

                            <li>
                              <a href="https://www.instagram.com/" className="redes"><img className="instagram" src={instagram} alt="pagina instagram"/></a>
                            </li>

                            <li>
                             <a href="https://www.whatsapp.com/"><img className="whatsapp" src={whatsapp} alt="pagina whatsapp"/></a>
                            </li>
                        </ol>
                    </article>	
                    
                </div>		
            </section>
        </div>
);
}

export default Contacto;