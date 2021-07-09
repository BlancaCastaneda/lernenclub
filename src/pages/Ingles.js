import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import English from "../components/english/English";

function Ingles(){
    return(
        <div className="container">
            <Header />
            <Navbar />
            <English />
            <Footer />
        </div>
    );
}

export default Ingles;