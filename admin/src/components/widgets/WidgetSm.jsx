import { Visibility } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    padding: 20px;
    margin-right: 20px;
`;

const Title = styled.span`
    display: block;
    font-size: 22px;
    font-weight: 600;
`;

const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const User = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px 0px 0px;
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserName = styled.span`
    font-weight: 600;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;

const WidgetSm = () => {
    return (
        <Container>
            <Title>New Members</Title>
            <UsersContainer>
                <User>
                    <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                    <UserName>Tatiana Dekker</UserName>
                    <Button><Visibility style={{fontSize:16,marginRight:5}}/>Display</Button>
                </User>
                <User>
                    <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                    <UserName>Tatiana Dekker</UserName>
                    <Button><Visibility style={{fontSize:16,marginRight:5}}/>Display</Button>
                </User>
                <User>
                    <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                    <UserName>Tatiana Dekker</UserName>
                    <Button><Visibility style={{fontSize:16,marginRight:5}}/>Display</Button>
                </User>
                <User>
                    <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                    <UserName>Tatiana Dekker</UserName>
                    <Button><Visibility style={{fontSize:16,marginRight:5}}/>Display</Button>
                </User>
            </UsersContainer>
        </Container>
    )
}

export default WidgetSm
