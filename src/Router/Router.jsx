import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pagas/Home/Home/Home";
import Login from "../Pagas/Login/Login";
import SignUp from "../Pagas/SignUp/SignUp";
import Checkout from "../Pagas/Checkout/Checkout";
import Bookings from "../Pagas/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ServicesDetails from "../Pagas/ServicesDetails/ServicesDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-henna.vercel.app/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,

      },
      {
        path: '/servicesDetails/:id',
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) => fetch(`https://car-doctor-server-henna.vercel.app/services/${params.id}`)
      }
    ]
  }
])

export default router;