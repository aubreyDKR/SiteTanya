import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../../redux/apiCalls';
import { ADMIN_URL } from '../../constants/url';
import { ShoppingCartOutlined, ExitToAppOutlined, AccountCircleOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
`;

const UserAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: contain;
`;

const ItemName = styled.span`

`;

const NavLinks = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const [userIsLoading, setUserIsLoading] = useState(true);
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            setUserIsLoading(true);
            try {
                await getUserInfos(dispatch);
            } catch (err) { };
            setUserIsLoading(false);
        };
        getUser();
    }, []);

    const logout = () => {
        window.open("http://localhost:5000/api/auth/logout", "_self");
    }

    return (
        <Container>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
                <MenuItem>ABOUT</MenuItem>
            </Link>
            <Link to={"/shop"} style={{ textDecoration: "none" }}>
                <MenuItem>SHOP</MenuItem>
            </Link>
            {user ? (
                <>
                    <MenuItem>
                        <UserAvatar src={user.profilePicture} />
                        <ItemName>PROFILE</ItemName>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                        <ExitToAppOutlined />
                        <ItemName>LOGOUT</ItemName>
                    </MenuItem>
                </>
            )
                : (
                    <Link to="/login">
                        <MenuItem>
                            <AccountCircleOutlined />
                            <ItemName>LOGIN</ItemName>
                        </MenuItem>
                    </Link>
                )}
            <Link to="/cart" style={{ textDecoration: "none" }}>
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    <ItemName>CART</ItemName>
                </MenuItem>
            </Link>
        </Container>
    )
}

export default NavLinks
