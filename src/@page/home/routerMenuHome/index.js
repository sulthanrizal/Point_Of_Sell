import MenuColdDishes from "../menuColdDishes";
import MenuHotDishes from "../menuHotDishes";
import Soup from "../soup";


const routerMenuHome = [
    {
        path: '/hotdishes',
        element: <MenuHotDishes />
    },
    {
        path: '/colddishes',
        element: < MenuColdDishes />

    },
    {
        path: '/soup',
        element: <Soup />
    },
]

export default routerMenuHome;