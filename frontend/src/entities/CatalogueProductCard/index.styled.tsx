import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IFavouriteIconStyled, IProductContainerStyled } from './types'

export const ProductContainerStyled = styled('div', {
  shouldForwardProp: (props) => props !== 'withImageAnimation',
})<IProductContainerStyled>(({ withImageAnimation }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  '&:hover': {
    '#image': {
      transform: withImageAnimation ? 'scale(1.05) rotate(1deg)' : 'none',
    },
    '#title': {
      color: '#E5C958',
    },
    '#cartBtn': {
      opacity: 1,
    },
  },
}))

export const HeaderMenuProductStyled = styled('div')({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  zIndex: 1,
})

export const DiscountBadgeStyled = styled(Typography)({
  backgroundColor: '#E5C958',
  borderRadius: '12px',
  padding: '2px 4px',
  width: 'fit-content',
})

export const FavouriteIconStyled = styled('div', {
  shouldForwardProp: (props) => props !== 'isFavourite',
})<IFavouriteIconStyled>(({ isFavourite }) => ({
  marginLeft: 'auto',
  zIndex: 5,
  cursor: 'pointer',
  svg: {
    '&:hover': {
      color: isFavourite ? '#D32F2F' : '#F5501F',
    },
    transition: '.3s ease-in-out',
  },
}))

export const TopSideBoxLinkToProductStyled = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

export const ProductImageStyled = styled('img')({
  maxWidth: '200px',
  maxHeight: '200px',
  transition: '.3s ease-in-out',
})

export const ProductTitleStyled = styled(Link)({
  display: 'block',
  width: '100%',
  color: 'black',
  transition: '.3s ease-in-out',
  textDecoration: 'none',
})

export const ProductPriceBlockStyled = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '8px',
})

export const ProductFinalPriceStyled = styled(Typography)({
  color: '#333333',
  fontWeight: '600',
})

export const ProductPriceWithoutDiscountStyled = styled(Typography)({
  color: '#999999',
  fontWeight: '400',
  textDecoration: 'line-through',
})
