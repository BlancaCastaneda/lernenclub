import React from 'react';
import error from './imgerror.svg';
import './Error404.css';

function Error404(){
    return(
        <div className="container__page404">
            <h2 className='title__404'>Esta página no está disponible</h2>
            <p className="mensaje">
                Es posible que el enlace que seleccionaste este dañado o se haya eliminado la página.
            </p>

            <br />
            <a href='/' className='link__404'>
                Volver a Lernen Club
            </a>

            <div className="error">
                <img className="error404" src={error} alt="aqui va la imagen de error" />
            </div>
            
            
            
        </div>
    );
}

export default Error404;