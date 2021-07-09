import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Contacus from "../components/contacus/Contacus";

function Contactenos(){
    return(
        <div className="container">
            <Header />
            <Navbar />
            <Contacus />
            <Footer />
        </div>
    );
}

export default Contactenos;