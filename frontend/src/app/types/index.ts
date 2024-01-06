import { JSX } from 'react'

export interface IRoute {
    path: string,
    isMainMenu: boolean,
    component: JSX.Element,
    label?: string,
    Icon?: JSX.Element,
}

export interface ICartProduct {
    id: number,
    title: string,
    discount: number,
    image: string | null,
    price: number,
    isFavourite: boolean,
    amount: number,
}

export interface IProduct {
    id: number,
    title: string,
    discount: number,
    image: string | null,
    price: number,
    isFavourite: boolean,
}