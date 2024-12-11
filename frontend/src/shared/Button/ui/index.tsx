import React from 'react'
import { BUTTON_SIZE_VARIANT, BUTTON_VARIANT } from '../config/enums'
import { ButtonProps as MUIButtonProps } from '@mui/material'
import {
  MuiButtonPrimaryStyled,
  MuiButtonSecondaryStyled,
  MuiButtonOutlineStyled,
  MuiButtonErrorStyled,
} from './index.styled'

interface IProps {
  children?: MUIButtonProps['children']
  onClick?: () => void
  size?: BUTTON_SIZE_VARIANT
  variant?: BUTTON_VARIANT
  disabled?: boolean
  fullWidth?: boolean
  commonProps?: React.HTMLProps<HTMLButtonElement>
}
export const Button = ({
  children,
  size = BUTTON_SIZE_VARIANT.medium,
  variant = BUTTON_VARIANT.primary,
  disabled,
  onClick = () => {},
  fullWidth,
  commonProps,
}: IProps) => {
  const variantButton: Record<BUTTON_VARIANT, React.ReactElement> = {
    [BUTTON_VARIANT.primary]: (
      <MuiButtonPrimaryStyled
        disabled={disabled}
        sSize={size}
        onClick={onClick}
        fullWidth={fullWidth}
        {...commonProps}
      >
        {children}
      </MuiButtonPrimaryStyled>
    ),
    [BUTTON_VARIANT.outline]: (
      <MuiButtonOutlineStyled
        disabled={disabled}
        sSize={size}
        onClick={onClick}
        fullWidth={fullWidth}
        {...commonProps}
      >
        {children}
      </MuiButtonOutlineStyled>
    ),
    [BUTTON_VARIANT.secondary]: (
      <MuiButtonSecondaryStyled
        disabled={disabled}
        sSize={size}
        onClick={onClick}
        fullWidth={fullWidth}
        {...commonProps}
      >
        {children}
      </MuiButtonSecondaryStyled>
    ),
    [BUTTON_VARIANT.error]: (
      <MuiButtonErrorStyled
        disabled={disabled}
        sSize={size}
        onClick={onClick}
        fullWidth={fullWidth}
        {...commonProps}
      >
        {children}
      </MuiButtonErrorStyled>
    ),
  }

  return variantButton[variant]
}
