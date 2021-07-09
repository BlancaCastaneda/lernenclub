import Header from "../components/header/Header";
import Nav from "../components/navbar/Navbar";
import Ourclub from "../components/ourclub/Ourclub";
import Footer from "../components/footer/Footer";


function Nuestroclub(){
    return(
        <div className="container">
            <Header />
            <Nav />
            <Ourclub />
            <Footer />
        </div>
    );
}

export default Nuestroclub;