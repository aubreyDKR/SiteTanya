import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Close } from "@material-ui/icons";
import { Divider, SwipeableDrawer } from '@material-ui/core';
import { useState } from 'react';

const Container = styled.div`

`;

const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
`;

const Hidden = styled.div`

`;

const MenuList = styled.div`
`;

const MenuItem = styled(Link)`
    font-size: 20px;
    cursor: pointer;
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
`;

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Button>
                <Menu style={{ fontSize: "40px" }} onClick={() => setOpen(true)} />
            </Button>
            <Hidden>
                <SwipeableDrawer
                    anchor="top"
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                >
                    <Button style={{display: "flex", justifyContent: "flex-end"}}>
                        <Close style={{ fontSize: "40px" }} onClick={() => setOpen(false)} />
                    </Button>
                    <Divider />
                    <MenuList>
                        <MenuItem to="/about">
                            ABOUT
                        </MenuItem>
                        <MenuItem to="/shop">
                            SHOP
                        </MenuItem>
                    </MenuList>
                </SwipeableDrawer>
            </Hidden>
        </Container>
    )
}

export default BurgerMenu
