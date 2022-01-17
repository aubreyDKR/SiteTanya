import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
//import { users } from "../data.js";
import { getUsersData } from '../api.js';
import { useEffect, useState } from "react";
import { colorTertiary } from '../constants/styles';
import { API_URL, BASE_URL, CLIENT_URL } from '../constants/url.js';

const Container = styled.div`
    flex: 4;
`;

const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const ActionButtons = styled.div`
`;

const EditButton = styled.button`
    background-color: ${colorTertiary};
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    margin-right: 10px;
`;

const DeleteButton = styled(DeleteOutline)`
    cursor: pointer;
    color: red;
`;

const UserList = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                await getUsersData(setUsersData);
            } catch(err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    const columns = [
        { field: '_id', headerName: 'ID', width: 225 },
        {
            field: 'user',
            headerName: 'Username',
            width: 180,
            renderCell: (params) => {
                return (
                    <User>
                        <UserImg src={params.row.profilePicture} />
                        {params.row.username}
                    </User>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 225,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/user/" + params.row._id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteButton onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];

    /*const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }*/

    const handleDelete = (id) => {
        setUsersData(usersData.filter((item) => item.id !== id));
    }

    return (
        <Container>
            <DataGrid
                getRowId={(row) => row._id}
                rows={usersData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}

export default UserList
