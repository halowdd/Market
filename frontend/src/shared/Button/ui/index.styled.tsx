import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { BUTTON_BORDER_RADIUS, BUTTON_HEIGHT, BUTTON_SIZE_VARIANT } from "../config/enums";


interface ButtonProps {
    sSize: BUTTON_SIZE_VARIANT,
}

export const MuiButtonPrimaryStyled  = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'sSize',
})<ButtonProps>(({ sSize }) => ({
    backgroundColor: '#4C6EF5',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: BUTTON_BORDER_RADIUS[sSize],
    height: BUTTON_HEIGHT[sSize],
    transition: '.3s ease-in-out',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#3366CC',
    },
    '&:active': {
        backgroundColor: '#003399',
    },
    '&:disabled': {
        color: '#666666',
        backgroundColor: '#CCCCCC',
    },
}));

export const MuiButtonOutlineStyled = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'sSize',
})<ButtonProps>(({ sSize }) => ({
    color: '#4C6EF5',
    borderRadius: BUTTON_BORDER_RADIUS[sSize],
    height: BUTTON_HEIGHT[sSize],
    border: '1px solid #4C6EF5',
    transition: '.3s ease-in-out',
    textTransform: 'none',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#3366CC',
        border: 'none',
    },
    '&:active': {
        color: '#FFFFFF',
        backgroundColor: '#003399',
        border: 'none',
    },
    '&:disabled': {
        color: '#A9BAFB',
        border: '1px solid #A9BAFB',
    },
}));

export const MuiButtonSecondaryStyled = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'sSize',
})<ButtonProps>(({ sSize }) => ({
    backgroundColor: '#FFFFFF',
    color: '#101025',
    border: '1px solid #D6D6DF',
    borderRadius: BUTTON_BORDER_RADIUS[sSize],
    height: BUTTON_HEIGHT[sSize],
    transition: '.3s ease-in-out',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#FBFBFC',
    },
    '&:active': {
        backgroundColor: '#F4F4F8',
    },
    '&:disabled': {
        color: '#D6D6DF',
    },
}));

export const MuiButtonErrorStyled = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'sSize',
})<ButtonProps>(({ sSize }) => ({
    backgroundColor: '#FFFFFF',
    color: '#D32F2F',
    border: '1px solid #D32F2F',
    borderRadius: BUTTON_BORDER_RADIUS[sSize],
    height: BUTTON_HEIGHT[sSize],
    transition: '.3s ease-in-out',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(211, 47, 47, 0.04)',
    },
    '&:active': {
        backgroundColor: 'rgba(211, 47, 47, 0.35)',
    },
    '&:disabled': {
        color: '#D6D6DF',
        border: '1px solid #D6D6DF',
    },
}));
