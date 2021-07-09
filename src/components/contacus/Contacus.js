import React from 'react';
import './Contacus.css';
import Modalcontacus from './Modalcontacus';
import '../../index.css';

function Contacus (){
    return (
       
            <div id="formulario">
                <form id="form"  name="solicitud" method="get" action= "url">
                    <div className="formulario">

                        <h1 className="datos"> Datos Básicos </h1>
                        <div id="cta" className="datos">
                            <label for="nombre"> Nombre Completo:</label>
                            <input type="text" id="nombre" name="nombre" size="50" maxlength="50" required ></input>
                        </div>
                        <div className="feedback"></div>

                        <div id="ctu" className="datos">
                            <label for="identificacion"> Número de identificación:</label>
                            <input type="text" id="identificacion" name="identificacion" size="20" maxlength="20" required ></input>
                        </div>

                        <div id="cte" className="datos">
                            <label for="telefonico"> Número telefónico:</label>
                            <input type="number" id="telefonico" name="telefonico" size="20" maxlength="50" required ></input>
                        </div>
                        <div className="feedback"></div>

                        <div id="cto" className="datos">
                            <label for="celular"> Número de Celular:</label>
                            <input type="number" id="celular" name="celular" size="20" maxlength="20"  required ></input>
                        </div>
                        

                        <div id="cca" className="datos">
                            <label for="direccion"> Dirección de residencia:</label>
                            <input type="text" id="direccion" name="direccion" size="80" maxlength="80" required ></input>
                        </div>
                        <div class="feedback"></div>

                        <div id="cco" className="datos">
                            <label for="correo"> Correo electrónico:</label>
                            <input type="email" id="correo" name="correo" size="80" maxlength="80" placeholder="usuario@dominio.com"></input>
                        </div>
                        <div className="datos">


                             <label for="perfil" className="msm"> Déjanos tu mensaje:</label>
                                <textarea rows="5"></textarea>

                                </div>
                                <div className="politica">
                                    <a href="ingles.html" target="_blank">Política de Tratamiento de Datos</a>
                                </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="aceptacion">Acepto las políticas y condiciones de este sitio web</p>
                                </label>
                            </div>

                            
                        <div className="botones">
                                                     
                            <Modalcontacus />   
                            <input type="reset" onClick="Enviar" value="Reinicar" />
                        </div>
                            
                    </div>

                    
                </form>

               
            </div>
 );
}

export default Contacus;
