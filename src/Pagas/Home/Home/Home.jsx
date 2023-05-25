import About from "../Abuot/About";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contacts></Contacts>
            <Products></Products>
            
        </div>
    );
};

export default Home;