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
            <div className="">
                <div className="my-32 relative">
                    <div className="mx-auto h-7 bg-red-600 w-[950px] z-10 border-white border-4 absolute bottom-1/2"></div>
                    <div className="flex items-start">
                        <div className="h-80 absolute top-10 w-6 ml-[100px] transform rotate-[40deg] bg-red-600"></div>
                        <div className="flex items-end">
                            <div className="h-[680px] w-6 ml-[222px] transform rotate-[40deg] bg-red-600"></div>
                            <div className="h-[340px] absolute bottom-12 w-6 ml-[360px] transform rotate-[40deg] bg-red-600"></div>
                        </div>
                        <div className="h-[680px] w-6 ml-[396px] transform -rotate-[40deg] bg-red-600"></div>

                        <div className="h-48 absolute top-12 w-6 ml-[620px] transform rotate-[40deg] bg-red-600"></div>
                        <div className="h-[680px] w-6 ml-[260px] transform -rotate-[40deg] bg-red-600"></div>
                    </div>

                </div>
            </div>
            <div className="my-16">
                <div className="w-1/3 h-28 bg-slate-300 rounded-l-box"></div>
            </div>
        </div>
    );
};

export default Home;