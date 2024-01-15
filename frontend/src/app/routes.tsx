import { CartIcon } from './static'
import {
  CataloguePage,
  HomePage,
  FavouritePage,
  ProductPage,
  LoginPage,
  RegistrationPage,
} from 'pages'
import { IRoute } from './types'
import {ProfilePage} from "../pages/ProfilePage";

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
  },
  {
    path: '/login',
    isMainMenu: false,
    component: <LoginPage />,
  },
  {
    path: '/registration',
    isMainMenu: false,
    component: <RegistrationPage />,
  },
  {
    path: '/profile',
    isMainMenu: false,
    component: <ProfilePage />,
  },
]

export const mainMenuRoutes = routes.filter((route) => route.isMainMenu)
