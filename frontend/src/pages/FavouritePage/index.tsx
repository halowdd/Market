import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { ProductsListContainerStyled } from './index.styled'
import { CatalogueProductCard } from 'entities/CatalogueProductCard'
import { getFavouriteProducts } from 'store/products/products.slice'

export const FavouritePage = () => {
  const products = useAppSelector(getFavouriteProducts)
  return (
    <ProductsListContainerStyled>
      {products.map((product) => (
        <CatalogueProductCard key={product.id} {...product} />
      ))}
    </ProductsListContainerStyled>
  )
}
