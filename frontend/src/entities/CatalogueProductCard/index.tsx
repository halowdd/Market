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
} from './index.styled'
import { HeartIcon, WithoutImage } from 'app/static'
import { useActions, useAppSelector } from 'hooks/redux'
import axios from 'app/axios'
import { getFavouriteProducts } from 'store/auth/auth.slice'
import { Button } from "../../shared/Button/ui";
import { BUTTON_SIZE_VARIANT } from "../../shared/Button/config/enums";

export const CatalogueProductCard = (product: IProduct) => {
  const { _id, image, price, title, discount } = product
  const { setProductToCart } = useActions()
  const finalPrice = discount ? (price / 100) * (100 - discount) : price

  const allFavouriteProducts = useAppSelector(getFavouriteProducts)
  const isFavourite = allFavouriteProducts?.includes(product._id)

  const onFavouriteClick = () => {
    if (isFavourite) {
      return axios.delete(`/favourites/${product._id}`);
    }
    return axios.post(`/favourites/${product._id}`);
  }

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
            onClick={onFavouriteClick}
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
        <Button
          onClick={() => setProductToCart(product)}
          fullWidth
          size={BUTTON_SIZE_VARIANT.small}
        >
          В корзину
        </Button>
      </div>
    </ProductContainerStyled>
  )
}
