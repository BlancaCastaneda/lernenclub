import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Plans from "../components/plans/Plans";

function Planes(){
    return(
        <div className="container">
            <Header />
            <Navbar />
            <Plans />
            <Footer />
        </div>
    );
}

export default Planes;