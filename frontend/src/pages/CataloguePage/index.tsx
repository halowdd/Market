import React from 'react';
import { useAppSelector } from 'hooks/redux';
import { ProductsListContainerStyled } from './index.styled';
import { CatalogueProductCard } from 'entities/CatalogueProductCard';
import { getAllProducts } from 'store/products/products.slice';


export const CataloguePage = () => {
    const products = useAppSelector(getAllProducts)

    return (
        <ProductsListContainerStyled>
            {products.map(product => (
                <CatalogueProductCard key={product.id} {...product} />
            ))}
        </ProductsListContainerStyled>
    )
}
