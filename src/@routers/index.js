import Dashboard from "../@page/dashboard";
import Home from "../@page/home";
import Promo from "../@page/promo";

const routers = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/promo',
        element: <Promo />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }

]
export default routers