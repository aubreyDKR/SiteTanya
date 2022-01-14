import styled from "styled-components";
import { Instagram } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const AuthorRights = styled.span`
    text-align: center;
    font-size: 12px;
`;

const SocialIcons = styled.div`
    padding: 20px 0px;
`;

const Icon = styled.div`
    color: lightgrey;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    padding: 5px;
    transition: all 0.3s ease;
    border: solid lightgrey 1px;

    &:hover {
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        border: none;
        color: white;
    }
`;

const WebsiteCredits = styled.span`
    align-self: flex-end;
    color: lightgray;
    font-size: 12px;
`;

const Footer = () => {

    const redirectTo = () => {
        window.location.href = "https://www.instagram.com/tanysolaire/";
    }

    return (
        <Container>
            <Wrapper>
                <AuthorRights>
                    © 2021 by Tatiana Dekker. All content Copyrighted.<br/>
                    Email- tatianadekker@gmail.com
                </AuthorRights>
                <SocialIcons>
                    <Icon onClick={() => {redirectTo()}}>
                        <Instagram fontSize="large"/>
                    </Icon>
                </SocialIcons>
                <WebsiteCredits>
                    Website created by : Dekker Aubrey
                </WebsiteCredits>
            </Wrapper>
        </Container>
    )
}

export default Footer
