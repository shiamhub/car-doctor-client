import { Outlet } from "react-router-dom";
import Footer from "../Pagas/Shared/Footer/Footer";
import NavBar from "../Pagas/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;