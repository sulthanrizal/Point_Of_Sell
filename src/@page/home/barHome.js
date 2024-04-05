import HotDishes from "./contentHome";

const BarHome = [
    {
        titleBar: 'Hot Dishes',
        path: '/hotdishes',
        element: <HotDishes />,
        status: false
    },
    {
        titleBar: 'Cold Dishes',
        path: 'colddishes',
        element: <HotDishes />,
        status: false
    },
    {
        titleBar: 'Shoup',
        status: false
    },
    {
        titleBar: 'Grill',
        status: false
    },
    {
        titleBar: 'Appetizer',
        status: false
    },
    {
        titleBar: 'Dessert',
        status: false
    }
]
export default BarHome;