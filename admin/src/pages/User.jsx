import styled from 'styled-components';
import { colorTertiary } from '../constants/styles';
import { CalendarToday, MailOutline, LocationSearching, PermIdentity, CloudDone, Publish } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import { getUserData } from '../api';
import { useParams } from 'react-router-dom';

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
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                await getUserData(setUser, id);
            } catch(err) {
                console.log(err);
            }   
        };
        getUser();
    }, []);

    return (
        <Container>
            <Title>Edit User</Title>
            <UserContainer>
                <UserInfos>
                    <UserInfosHeader>
                        <UserImg src={user.profilePicture}/>
                        <UserName>{user.username}</UserName>
                    </UserInfosHeader>
                    <AccountDetails>
                        <UserInfosTitle>Account Details</UserInfosTitle>
                        <UserInfosItem>
                            <CloudDone style={{ fontSize: 16, marginRight: 10 }} />
                            {user.googleId ? "GoogleAuth" : "Unknow"}
                        </UserInfosItem>
                        <UserInfosItem><CalendarToday style={{ fontSize: 16, marginRight: 10 }} />{user.createdAt}</UserInfosItem>
                    </AccountDetails>
                    <ContactDetails>
                        <UserInfosTitle>Contact Details</UserInfosTitle>
                        <UserInfosItem><MailOutline style={{ fontSize: 16, marginRight: 10 }} />{user.email}</UserInfosItem>
                        <UserInfosItem><LocationSearching style={{ fontSize: 16, marginRight: 10 }} />Nizhny Novgorod | Russia</UserInfosItem>
                    </ContactDetails>
                </UserInfos>
                <UserEditFormContainer>
                    <UserEditFormLeft>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Username</UserEditFormItemLabel>
                            <UserEditFormItemInput type="text" placeholder={user.username} />
                        </UserEditFormItem>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Email</UserEditFormItemLabel>
                            <UserEditFormItemInput type="email" placeholder={user.email} />
                        </UserEditFormItem>
                        <UserEditFormItem>
                            <UserEditFormItemLabel>Address</UserEditFormItemLabel>
                            <UserEditFormItemInput type="text" placeholder="Nizhny Novgorod | Russia" />
                        </UserEditFormItem>
                    </UserEditFormLeft>
                    <UserEditFormRight>
                        <UserEditFormItem>
                            <UserEditFormUserImg src={user.profilePicture}/>
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
