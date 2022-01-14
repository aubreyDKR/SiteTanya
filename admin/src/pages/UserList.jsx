import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { users } from "../data.js";
import { useState } from "react";
import { colorTertiary } from '../constants/styles';

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
    const [data, setData] = useState(users);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'Username',
            width: 200,
            renderCell: (params) => {
                return (
                    <User>
                        <UserImg src={params.row.avatar} />
                        {params.row.username}
                    </User>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
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
                        <Link to={"/user/" + params.row.id} style={{textDecoration:"none"}}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteButton onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    return (
        <Container>
            <DataGrid
                rows={data}
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
