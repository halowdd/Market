import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ILinkContainerStyledProps } from './types'

export const HeaderContainerStyled = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '72px',
  padding: '0 20px',
  backgroundColor: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 5,
})

export const NavigationListContainerStyled = styled('div')({
  display: 'flex',
  gap: '16px',
  height: '100%',
})

export const LinkContainerStyled = styled(Link, {
  shouldForwardProp: (props) => props !== 'isActive',
})<ILinkContainerStyledProps>(({ isActive }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textDecoration: 'none',
  color: isActive ? '#E5C958' : 'black',
  background: 'none',
  '&:hover': {
    '#label': {
      color: '#E5C958',
    },
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: 48,
    width: isActive ? '100%' : '0%',
    height: '2px',
    backgroundColor: '#E5C958',
    borderRadius: '12px',
    transition: 'width .3s ease-in-out',
  },
  '&:hover::after': {
    content: '""',
    width: '100%',
  },
}))

export const LinkLabelStyled = styled(Typography)({
  fontWeight: 600,
  transition: 'color .3s ease-in-out',
  textTransform: 'uppercase',
})

export const RightSideHeaderStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const FavouriteBlockStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  textDecoration: 'none',
  svg: {
    color: '#FFFFFF',
    transition: '.3s ease-in-out',
  },
  '.MuiTypography-root': {
    color: '#333333',
    transition: '.3s ease-in-out',
  },
  '&:hover': {
    svg: {
      color: '#D32F2F',
    },
    '.MuiTypography-root': {
      color: '#D32F2F',
    },
  },
})
