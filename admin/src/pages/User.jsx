import styled from 'styled-components';
import { colorTertiary } from '../constants/styles';
import { CalendarToday, MailOutline, LocationSearching, PermIdentity, CloudDone, Publish } from "@material-ui/icons";

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 26px;
`;

const ModifyUserButton = styled.button`
    background-color: ${colorTertiary};
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
`;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const UserInfos = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const UserInfosTitle = styled.span`
    color: lightgray;
    font-weight: 600;
    font-size: 14px;
`;

const UserInfosHeader = styled.div`
    display: flex;
    align-items: center;
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
`;

const UserName = styled.span`
    font-weight: 600;
`;

const AccountDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const UserInfosItem = styled.span`
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #444;
`;

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const UserEditFormContainer = styled.form`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
`;

const UserEditFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserEditFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const UserEditFormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const UserEditFormItemLabel = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
`;

const UserEditFormItemInput = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`;

const UserEditFormUserImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
`;

const UpdateButton = styled.button`
    background-color: ${colorTertiary};
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
`;

const User = () => {
    return (
        <Container>
            <Title>Edit User</Title>
            <UserContainer>
                <UserInfos>
                    <UserInfosHeader>
                        <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                        <UserName>Tatiana Dekker</UserName>
                    </UserInfosHeader>
                    <AccountDetails>
                        <UserInfosTitle>Account Details</UserInfosTitle>
                        <UserInfosItem><CloudDone style={{ fontSize: 16, marginRight: 10 }} />GoogleAuth</UserInfosItem>
                        <UserInfosItem><CalendarToday style={{ fontSize: 16, marginRight: 10 }} />10.12.1999</UserInfosItem>
                    </AccountDetails>
                    <ContactDetails>
                        <UserInfosTitle>Contact Details</UserInfosTitle>
                        <UserInfosItem><MailOutline style={{ fontSize: 16, marginRight: 10 }} />tatianadekker@gmail.com</UserInfosItem>
                        <UserInfosItem><LocationSearching style={{ fontSize: 16, marginRight: 10 }} />Nizhny Novgorod | Russia</UserInfosItem>
                    </ContactDetails>
                </UserInfos>
                <UserEditFormContainer>
                    <UserEditFormLeft>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Username</UserEditFormItemLabel>
                            <UserEditFormItemInput type="text" placeholder="Tatiana Dekker" />
                        </UserEditFormItem>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Email</UserEditFormItemLabel>
                            <UserEditFormItemInput type="email" placeholder="tatianadekker@gmail.com" />
                        </UserEditFormItem>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Address</UserEditFormItemLabel>
                            <UserEditFormItemInput type="text" placeholder="Nizhny Novgorod | Russia" />
                        </UserEditFormItem>
                    </UserEditFormLeft>
                    <UserEditFormRight>
                        <UserEditFormItem>
                            <UserEditFormUserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg"/>
                            <Publish/>
                            <UserEditFormItemInput type="file" id="file" style={{display:"none"}}/>
                        </UserEditFormItem>
                        <UpdateButton>Update</UpdateButton>
                    </UserEditFormRight>
                </UserEditFormContainer>
            </UserContainer>
        </Container>
    )
}

export default User
