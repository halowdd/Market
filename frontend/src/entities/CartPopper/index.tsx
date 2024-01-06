import React, {useState} from 'react';
import { CartBlockStyled, CartPopperStyled } from './index.styled';
import { Fade } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import { getCart } from '../../store/cartProducts/cartProducts.slice';


export const CartPopper = () => {
    const cart = useAppSelector(getCart)
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isOpenPopper = Boolean(anchorEl);
    const handleLeaveLink = () => {
        setAnchorEl(null);
    };
    const handleEnterLink = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    console.log(cart)
    return (
        <div onMouseLeave={handleLeaveLink}>
            <CartBlockStyled onMouseEnter={handleEnterLink}>
                <div>
                    Корзина
                </div>
                <CartPopperStyled
                    open={isOpenPopper}
                    anchorEl={anchorEl}
                    placement="bottom-end"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <div>
                                privet
                            </div>
                        </Fade>
                    )}
                </CartPopperStyled>
            </CartBlockStyled>
        </div>
    )
}