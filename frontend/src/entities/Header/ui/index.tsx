import React from 'react';
import { IRoute } from 'app/types';
import { useLocation } from 'react-router-dom';
import { Typography, useMediaQuery } from '@mui/material';
import {
    HeaderContainerStyled,
    NavigationListContainerStyled,
    LinkContainerStyled,
    LinkLabelStyled,
    RightSideHeaderStyled,
    FavouriteBlockStyled,
} from './index.styled';
import { HeartIcon } from 'app/static';
import { CartPopper } from '../../CartPopper';


interface IProps {
    routes: IRoute[],
}
export const Header = ({ routes }: IProps) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { pathname } = useLocation();

    return (
        <HeaderContainerStyled>
            <Typography>
                Logo
            </Typography>
            {!isMobile && (
                <NavigationListContainerStyled>
                    {routes.map((item, index) => {
                        const isActiveUrl = pathname.includes(item.path);
                        return (
                            <LinkContainerStyled key={index} to={item.path} isActive={isActiveUrl}>
                                <LinkLabelStyled id="label">{item.label}</LinkLabelStyled>
                            </LinkContainerStyled>
                            )
                    })}
                </NavigationListContainerStyled>
            )}
            <RightSideHeaderStyled>
                <FavouriteBlockStyled to="favourite">
                    <HeartIcon />
                    <Typography variant="body2">Избранное</Typography>
                </FavouriteBlockStyled>
                <CartPopper />
            </RightSideHeaderStyled>
        </HeaderContainerStyled>
    )
}