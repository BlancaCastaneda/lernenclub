import logo from './logo.svg';
import background from './backgroundheader.png';
import './Header.css';

function Header() {
  return (
      <header>

        

        <div className="logo">
          <img className="size" src={logo} alt="aqui va el logo del jardin" />
        </div>

        <div className="boton">
          <button className="btn-blue">Iniciar Sesión</button>
        </div>

      </header>
  );
}

export default Header;