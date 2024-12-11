import React, { useState } from 'react'
import { CartPopperContentStyled, CartPopperStyled } from './index.styled'
import { Fade } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { getCart } from '../../store/cartProducts/cartProducts.slice'
import {
  DiscountBadgeStyled,
  FavouriteIconStyled,
  HeaderMenuProductStyled, ProductContainerStyled,
  ProductFinalPriceStyled,
  ProductImageStyled,
  ProductPriceBlockStyled,
  ProductPriceWithoutDiscountStyled,
  ProductTitleStyled,
  TopSideBoxLinkToProductStyled
} from "../CatalogueProductCard/index.styled";
import {HeartIcon, WithoutImage} from "../../app/static";
import {Button} from "../../shared/Button/ui";
import {BUTTON_SIZE_VARIANT} from "../../shared/Button/config/enums";

export const CartPopper = () => {
  const cart = useAppSelector(getCart)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpenPopper = Boolean(anchorEl)
  const handleLeaveLink = () => {
    setAnchorEl(null)
  }
  const handleEnterLink = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div onMouseLeave={handleLeaveLink}>
      <div onMouseEnter={handleEnterLink}>
        <div>Корзина</div>
        <CartPopperStyled
          open={isOpenPopper}
          anchorEl={anchorEl}
          placement="bottom-end"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <CartPopperContentStyled>
                <ProductContainerStyled>
                  <HeaderMenuProductStyled>
                    {1 ? (
                        <DiscountBadgeStyled variant="body2">{`-${11}%`}</DiscountBadgeStyled>
                    ) : null}
                    <FavouriteIconStyled isFavourite={true}>
                      <HeartIcon
                          width="20px"
                          height="20px"
                          color={true ? '#B81E1F' : '#FFFFFF'}
                          onClick={() => {}}
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
              </CartPopperContentStyled>
            </Fade>
          )}
        </CartPopperStyled>
      </div>
    </div>
  )
}
