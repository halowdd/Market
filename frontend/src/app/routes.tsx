import { CartIcon } from './static';
import { CataloguePage, HomePage, FavouritePage, ProductPage } from 'pages';
import { IRoute } from './types';


export const routes: IRoute[] = [
    {
        path: '/home',
        label: 'Главная',
        Icon: <CartIcon />,
        isMainMenu: true,
        component: <HomePage />,
    },
    {
        path: '/catalogue',
        label: 'Каталог',
        Icon: <CartIcon />,
        isMainMenu: true,
        component: <CataloguePage />,
    },
    {
        path: '/favourite',
        isMainMenu: false,
        component: <FavouritePage />,
    },
    {
        path: '/catalogue/:productId',
        isMainMenu: false,
        component: <ProductPage />,
    }
];

export const mainMenuRoutes = routes.filter(route => route.isMainMenu);
