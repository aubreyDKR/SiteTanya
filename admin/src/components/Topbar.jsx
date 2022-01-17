import React, { useState } from 'react';
import styled from 'styled-components';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 20px;
`;
const Left = styled.div``;

const Logo = styled.a`
    font-weight: bold;
    font-size: 30px;
    color: purple;
    text-decoration: none;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    margin-left: 10px;
`;

const ProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

const Topbar = () => {
    const [user, setUser] = useState([]);


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo href='/'>
                        Tatiana Dekker
                    </Logo>
                </Left>
                <Right>
                    <IconContainer>
                        <Badge badgeContent={2} color="error">
                            <NotificationsNone />
                        </Badge>
                    </IconContainer>
                    <IconContainer>
                        <Language />
                    </IconContainer>
                    <IconContainer>
                        <Settings />
                    </IconContainer>
                    <IconContainer>
                        <ProfilePicture src="https://sun9-49.userapi.com/impf/c837429/v837429916/5cc7e/Q9CEfEFF7g8.jpg?size=1280x1280&quality=96&sign=23063a57779cef0291940fcd6ef79423&type=album" />
                    </IconContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar
