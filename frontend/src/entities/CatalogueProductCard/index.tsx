import { IProduct } from 'app/types'
import React from 'react'
import {
  ProductContainerStyled,
  HeaderMenuProductStyled,
  DiscountBadgeStyled,
  FavouriteIconStyled,
  TopSideBoxLinkToProductStyled,
  ProductImageStyled,
  ProductTitleStyled,
  ProductPriceBlockStyled,
  ProductFinalPriceStyled,
  ProductPriceWithoutDiscountStyled,
  AddToCardButtonStyled,
} from './index.styled'
import { HeartIcon, WithoutImage } from 'app/static'
import { useActions } from 'hooks/redux'

export const CatalogueProductCard = (product: IProduct) => {
  const { _id, image, price, title, discount, isFavourite } = product
  const { setFavourite, setProductToCart } = useActions()
  const finalPrice = discount ? (price / 100) * (100 - discount) : price

  return (
    <ProductContainerStyled withImageAnimation={Boolean(image)}>
      <HeaderMenuProductStyled>
        {discount ? (
          <DiscountBadgeStyled variant="body2">{`-${discount}%`}</DiscountBadgeStyled>
        ) : null}
        <FavouriteIconStyled isFavourite={isFavourite}>
          <HeartIcon
            width="20px"
            height="20px"
            color={isFavourite ? '#B81E1F' : '#FFFFFF'}
            onClick={() => setFavourite(_id)}
          />
        </FavouriteIconStyled>
      </HeaderMenuProductStyled>
      <TopSideBoxLinkToProductStyled to={_id}>
        <ProductImageStyled id="image" src={image || WithoutImage} />
      </TopSideBoxLinkToProductStyled>
      <div>
        <ProductTitleStyled to={_id} id="title">
          {title}
        </ProductTitleStyled>
        <ProductPriceBlockStyled>
          <ProductFinalPriceStyled variant="h6">
            {`${finalPrice.toFixed(0)} ₽`}
          </ProductFinalPriceStyled>
          {discount ? (
            <ProductPriceWithoutDiscountStyled variant="body1">
              {`${price.toFixed(0)} ₽`}
            </ProductPriceWithoutDiscountStyled>
          ) : null}
        </ProductPriceBlockStyled>
        <AddToCardButtonStyled
          id="cartBtn"
          onClick={() => setProductToCart(product)}
        >
          В корзину
        </AddToCardButtonStyled>
      </div>
    </ProductContainerStyled>
  )
}
