import React from 'react';
import {useAppSelector} from '../../hooks/redux';
import {getProductById} from '../../store/products/products.slice';
import { useParams } from 'react-router-dom';


export const ProductPage = () => {
    let { productId } = useParams();
    const productByIdFromUrl = useAppSelector(state => getProductById(state, Number(productId)))

    if (!productByIdFromUrl) {
        return (
            <div>
                продукт не найден
            </div>
        )
    }
    return (
        <div>
            Это страница продукта {productByIdFromUrl.id}
        </div>
    )
}