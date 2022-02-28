import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { products } from "../data.js";
import { useEffect, useState } from "react";
import { colorTertiary } from '../constants/styles';
import { getProductsData } from '../api.js';

const Container = styled.div`
    flex: 4;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProductImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
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

const ProductList = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                await getProductsData(setProductsData);
            } catch(err) {
                console.log(err);
            }
        };
        getProducts();
    }, []);

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <Product>
                        <ProductImg src={params.row.img} />
                        {params.row.name}
                    </Product>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 150,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/product/" + params.row._id} style={{ textDecoration: "none" }}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteButton onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        setProductsData(productsData.filter((item) => item.id !== id));
    }

    return (
        <Container>
            <DataGrid
                getRowId={(row) => row._id}
                rows={productsData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}

export default ProductList
