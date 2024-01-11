import { styled } from '@mui/system'
import { Grid, Paper } from '@mui/material'

export const ContainerStyled = styled(Grid)({
  height: '100vh',
})

export const PaperStyled = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '40px',
})

export const FormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})
