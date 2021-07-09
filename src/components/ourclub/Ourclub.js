import React from 'react';
import teacher from './teacher.jpg';
import plan from './plan.png';
import './Ourclub.css';
import '../../index.css';

function Ourclub (){
    return (
    <div>
        <section className="nuestroclub">
            <article className="cajatipo1">
                <div className="img1">
                    <img src={teacher} alt="aqui esta la imagen de la directora" className="img-teacher1"/>
                </div>
                <div className="texto1"> 
                    <h2 className="nombre">Catherine Velásquez Rodríguez</h2>
                    <p className="carrera">Licenciada en Educación Básica con énfasis en lengua castellana, formación en CRM – al buen servicio y atención al cliente,
                        en principios básicos de –english dot Works beginner y proyecto de vida. Experiencia como Docente de pre-escolar, básica primaria 
                        y media bachiller, líder en proyectos de –literatura, educación sexual en la infancia y adolescencia, y en proyectos ambientales
                        en la reutilización del material reciclable, jefe de área de lenguaje, gestora de escuela de padres. Fortalezas: compromiso, 
                        actitud de servicio, adaptabilidad y creatividad.</p>
                </div>
                                                                                                                                      
            </article>

            <article className="cajatipo2">
                <div className="img1">
                    <img src={teacher} alt="aqui esta la imagen de la directora" className="img-teacher1"/>
                </div>
                <div className="texto1"> 
                    <h2 className="historiat"> Historia</h2>
                    <p className="historiap">Basados en las necesidades y circunstancias actuales, del entorno familiar y  algunos vecinos con hijos en edad escolar,
                        respecto a la formación y educación, LERNEN CLUB, surgió como un método de ayuda y auxilio a los padres de familia.
                        Ante la imposibilidad de la educación presencial, en las aulas escolares, y la dificultad de los padres para brindarles
                        esta formación académica a sus hijos, LERNEN CLUB, Inicialmente, conformó pequeños grupos de transición y primaria, para brindarles apoyo
                        y formación personalizada, teniendo en cuenta el programa académico de las instituciones educativas.
                        El cumplimiento de actividades, entrega de cronogramas para la realización de eventos especiales, marcaron la diferencia, permitiéndonos,
                        en  2021,  expandir el servicio a toda la comunidad de vecinos  y zonas aledañas.
                        Como consecuencia surge un espacio familiar, donde los padres adquieren también el compromiso, de aportar las herramientas y materiales
                        necesarios, para que sus hijos reciban el apoyo, y la formación académica integral.
                        LOGROS: La promoción, previa evaluación en las áreas básicas, comunicativas de lógico razonamiento, e idiomas entre otros, permitiéndoles 
                        ser promovidos a un nivel superior, de acurdo a su nivel y a su edad.</p>
                </div>
                
            </article>

            <article className="cajatipo1">
                <div className="img1">
                    <img src={teacher} alt="aqui esta la imagen de la directora" className="img-teacher1"/>
                </div>
                <div className="texto1">         
                    <h2 className="nombre">Misión</h2>
                    <p className="carrera">Brindar con eficacia y eficiencia la  calidad pertinente en la pedagogía, en la atención   y formación integral, en las diferentes disciplinas del conocimiento, a los  niños y niñas que lo requieran. Ayudando de este modo a todas las familias, a fortalecer el desarrollo y crecimiento  de los infantes.</p>
                </div>
                
            </article>

            <article className="cajatipo2">
                <div className="img1">
                    <img src={teacher} alt="aqui esta la imagen de la directora" className="img-teacher1"/>
                </div>
                    <div className="texto1"> 
                        <h2 className="historiat">Visión</h2>
                        <p className="historiap">LERNEN CLUB, se proyecta como un espacio abierto, amplio para la continuidad de apoyo a la formación, no reglada, que cumpla con los parámetros y requisitos de formación y educación básica, de las instituciones educativas, contando con el recurso humano, pedagógico y profesional.
                           Se proyecta en la creación y ampliación de espacios pedagógicos, para la integración y compromiso de la familia y padres, en la formación educativa de los niños y niñas en edad escolar.</p>
                    </div>
            </article>

        </section>    
    </div>

 );
}

export default Ourclub;

   