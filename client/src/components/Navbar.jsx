import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, ExitToAppOutlined, AccountCircleOutlined } from '@material-ui/icons';
import { Badge, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../redux/apiCalls';
import logo from "../img/logotanyasite.png";
import { ADMIN_URL } from '../constants/url';

const Container = styled.div`
    width: 80%;
    margin: auto;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.img`
    width: 200px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

const Navbar = () => {
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
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo src={logo} />
                    </Link>
                </Center>
                <Right>
                    <Link to={"/about"} style={{ textDecoration: "none" }}>
                        <MenuItem>ABOUT</MenuItem>
                    </Link>
                    <Link to={"/shop"} style={{ textDecoration: "none" }}>
                        <MenuItem>SHOP</MenuItem>
                    </Link>
                    {userIsLoading ? (
                        <MenuItem>
                            <CircularProgress size={18} style={{'color': 'blue'}}/>
                        </MenuItem>
                    ) : (
                        user ? (
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
                        ) : (
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <MenuItem>
                                    <AccountCircleOutlined />
                                    <ItemName>LOGIN</ItemName>
                                </MenuItem>
                            </Link>
                        )
                    )}
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                            <ItemName>CART</ItemName>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
