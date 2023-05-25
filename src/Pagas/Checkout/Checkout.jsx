import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Checkout = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, title, price, img } = data;
    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = user?.email || from.email.value;
        const date = from.date.value;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            services: title,
            services_id: _id,
            price: price
        }
        console.log(booking);
        fetch('https://car-doctor-server-henna.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
            <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due amount</span>
                    </label>
                    <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                </div>
            </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Login" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;