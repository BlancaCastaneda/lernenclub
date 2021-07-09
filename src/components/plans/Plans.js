import React from 'react';
import './Plans.css';
import captura from './captura.png';
import cerebrito from './cerebrito.png';
import aventura from './aventura.png';
import pon from './pon.png';
import '../../index.css';

function Plans (){
    return (
        <div className="planes">
            <section className="cajasgloba cajatipo2">
                <img src={captura} alt="Aqui hay una imagen de un peque" className="imgcaptura"/>
                <div className="texto"> 
                    <h1 className="planest">Nuestros Planes</h1>
                </div>
                <div className="limpiar"></div>
            </section>
        
            <section className="cajasglobal cajatipo1">
                <img src={cerebrito} alt="Aqui hay una imagen de un cerebrito" className="imgcaptura"/>
                    <div className="texto"> 
                        <h2 className="cerebritot">CEREBRITO</h2>
                        <p className="cerebritop">Combo académico - Plan Celebrito, 10 horas a la semana de Lunes a Viernes en horarios flexibles, 
                        distribuidas en clase de refuerzo escolar, guarderia, recreación y deportes, clases de piano o clases
                        de ingles intensivo.</p>
                    </div>
                    <div className="limpiar"></div>
            </section>
        
            <section className="cajasglobal cajatipo2">
                <img src={pon} alt="Aqui hay una imagen de un cerebrito" className="imgcaptura"/>
                <div className="texto"> 
                    <h2> MY LITLE PONNY</h2>
                    <p>Jornada continúa desde las 7:00 a.m, horarios flexibles.
                       Incluye acompañamiento de clases virtuales, asesoría de tareas, refuerzo escolar en lectura, escritura,
                       secuencia de números, operaciones matemáticas, nociones, inglés, clases de piano, recreación y deportes.</p>
                </div>
                <div className="limpiar"></div>
            </section>

            <section className="cajasglobal cajatipo1">
                <img src={aventura} alt="Aqui hay una imagen de un cerebrito" className="imgcaptura"/>
                <div className="texto"> 
                    <h2>AVENTURAS EN PAÑALES</h2>
                    <p>Brindar con eficacia y eficiencia la  calidad pertinente en la pedagogía, en la atención   y formación integral,
                       en las diferentes disciplinas del conocimiento, a los  niños y niñas que lo requieran. Ayudando de este modo a todas
                       las familias, a fortalecer el desarrollo y crecimiento  de los infantes.
                    </p>
                </div>
                <div className="limpiar"></div>
            </section>

            <section className="cajasglobal ">
                <div className="video">
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcatherine.velasquezrodriguez%2Fvideos%2F10226012639366741%2F&show_text=false&width=560&t=0"> </iframe>
                        <p>Nuestra propuesta educativa está basada en las dimensiones del desarrollo infantil para promover las múltiples maneras
                           de ser inteligente.
                        </p>
                </div>
            </section>
        </div>
 );
}

export default Plans;
