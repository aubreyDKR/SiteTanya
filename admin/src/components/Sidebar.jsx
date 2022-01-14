import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutlined, PersonOutlined, Storefront, Timeline, TrendingUp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background: #FBFBFF;
    position: sticky;
    top: 50px;
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.span`
    font-size: 13px;
    color: #BEBDC2;
    font-weight: bold;
`;

const Menu = styled.div`
    margin-bottom: 10px;
`;

const MenuItem = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    color: #62616C;
    &:hover {
        background-color: #EFF0FF;
    }
`;

const MenuIcon = styled.div`
    margin-right: 5px;
`;


const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <MenuItem>
                            <MenuIcon>
                                <LineStyle style={{ fontSize: 20 }} />
                            </MenuIcon>
                            Home
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <MenuIcon>
                            <Timeline style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Analytics
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <TrendingUp style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Sales
                    </MenuItem>
                </Menu>

                <Menu>
                    <Title>Quick Menu</Title>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <MenuItem>
                            <MenuIcon>
                                <PersonOutlined style={{ fontSize: 20 }} />
                            </MenuIcon>
                            Users
                        </MenuItem>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <MenuItem>
                            <MenuIcon>
                                <Storefront style={{ fontSize: 20 }} />
                            </MenuIcon>
                            Products
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <MenuIcon>
                            <AttachMoney style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Transactions
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <BarChart style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Reports
                    </MenuItem>
                </Menu>

                <Menu>
                    <Title>Notifications</Title>
                    <MenuItem>
                        <MenuIcon>
                            <MailOutlined style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Mail
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <DynamicFeed style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Feedbacks
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon>
                            <ChatBubbleOutline style={{ fontSize: 20 }} />
                        </MenuIcon>
                        Messages
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
