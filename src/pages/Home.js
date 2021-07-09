import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Bannerinicio from "../components/inicio/Bannerinicio";
import Principal from "../components/inicio/Principal";
import Contacto from "../components/inicio/Contacto";

function Home(){
    return(
        <div className="container">
            <Header />
            <Navbar />
            <Bannerinicio />
            <Principal />
            <Contacto />
            <Footer />
        </div>
    );
}

export default Home;