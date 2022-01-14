import styled from "styled-components";
import { Instagram } from '@material-ui/icons';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)), 
        url("https://images3.alphacoders.com/954/thumb-1920-954241.jpg") center;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 20px;
    color: lightgray;
`;

const Button = styled.button`
    width: 150px;
    padding: 15px 25px;
    margin-bottom: 20px;
    border-radius: 5px;
    border-style: none;
    color: white;
    background: ${props => props.type === "google" ? "#df4930" 
        : props.type === "vk" ? "#597da3" 
        : props.type === "instagram" ? "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);"
        : "black"
    };
    font-weight: bold;
    display: flex;
    align-items: center;
    align-self: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/api/auth/google", "_self");
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Button type="google" onClick={google}>Google</Button>
                <Button type="vk">VK</Button>
                <Button type="instagram"><Instagram style={{marginRight: "10px"}}/>Instagram</Button>
            </Wrapper>
        </Container>
    )
}

export default Login
