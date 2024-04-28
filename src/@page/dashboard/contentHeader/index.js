import { DownIncrease, IconCustomer, IconDolar, IconSave, UpIncrease } from "./iconDashboard";

export const ContentTop = [
    {
        icon: <IconDolar />,
        persen: '+32.40%',
        increase: <UpIncrease />,
        bgColor: '#88E0913D',
        price: '$10,243.00',
        total: 'Total Revenue',
        color: '#50D1AA'
    }, {
        icon: <IconSave />,
        persen: '-12.40%',
        increase: <DownIncrease />,
        bgColor: '#FF64713D',
        price: '1000000',
        total: 'Total Dish Ordered',
        color: '#FF6471'
    }, {
        icon: <IconCustomer />,
        persen: '+2.40%',
        increase: <UpIncrease />,
        bgColor: '#88E0913D',
        price: '1000',
        total: 'Total Customer',
        color: '#50D1AA'
    }
]
