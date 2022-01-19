import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, ExitToAppOutlined, AccountCircleOutlined } from '@material-ui/icons';
import { Badge, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from "../../img/logotanyasite.png";
import { mobile, tablet } from "../../responsive";
import NavLinks from './NavLinks';
import BurgerMenu from './BurgerMenu';

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
    ${mobile({
        marginLeft: "0",
    })}
`;

const Input = styled.input`
    border: none;
    ${mobile({
        fontSize: "18px",
    })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.img`
    width: 200px;
    ${mobile({
    width: "100px",
})};
    ${tablet({
    width: "150px",
})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const UnderNavbar = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: "600px" })

    return (
        <Container>
            <Wrapper>
                <Left>
                    {isMobile ? (
                        <Language>EN</Language>
                    ) : (
                        <>
                            <Language>EN</Language>
                            <SearchContainer>
                                <Input placeholder="Search" />
                                <Search style={{ color: "gray", fontSize: 16 }} />
                            </SearchContainer>
                        </>
                    )}
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo src={logo} />
                    </Link>
                </Center>
                <Right>
                    {isMobile ? (
                        <BurgerMenu />
                    ) : (
                        <NavLinks />
                    )}
                </Right>
            </Wrapper>
            {isMobile ? (
                <UnderNavbar>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </UnderNavbar>
            ) : (
                <></>
            )}
        </Container>
    )
}

export default Navbar
