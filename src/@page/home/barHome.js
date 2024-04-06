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
        path: '/colddishes',
        element: <HotDishes />,
        status: false
    },
    {
        titleBar: 'Shoup',
        status: false,
        path: '/shoup'
    },
    {
        titleBar: 'Grill',
        status: false,
        path: '/grill'
    },
    {
        titleBar: 'Appetizer',
        status: false,
        path: '/appetizer'
    },
    {
        titleBar: 'Dessert',
        status: false,
        path: '/dessert'
    }
]
export default BarHome;