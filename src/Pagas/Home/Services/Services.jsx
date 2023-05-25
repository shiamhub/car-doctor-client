import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [acc, setAcc] = useState(true);
    console.log(services)

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${acc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [acc]);

    return (
        <div className="text-center mt-4">
            <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
            <h2 className="text-5xl">Our Services Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button onClick={() => setAcc(!acc)} className="btn btn-primary">
                {acc ? 'Price High To Low' : 'Price Low To High'}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard> )
                }   
            </div>
        </div>
    );
};

export default Services;