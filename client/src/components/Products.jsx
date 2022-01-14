import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from 'react';

const Container = styled.div`
    margin: 25px auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Products = ({filters,sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch(err) {
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key,value]) =>
                    item[key].includes(value) 
                )
            )
        );
    }, [products, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {filters
                ? filteredProducts.map((item) => <Product item={item} key={item._id}/>)
                : products
                    .slice(0,8)
                    .map((item) => <Product item={item} key={item._id}/>)}
        </Container>
    )
}

export default Products
