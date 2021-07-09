import './Bannerinicio.css';
import imagen from './banner.jpg';

function Bannerinicio(){
    return(
        <div>
            <section id="banner">
			    <img src={imagen} alt="Imagen de los ninos" />
		    </section>
        </div>
    );
}
export default Bannerinicio;