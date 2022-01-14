import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Products from "../components/Products";
import { useState, useEffect } from 'react';

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
    text-align: center;
`;

const FilterContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: white;
    border: 1px solid lightgrey;
`;

const Option = styled.option`
    
`;

const Shop = () => {
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar/>
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products :</FilterText>
                    <Select name="type" onChange={handleFilters}>
                        <Option value={""}>All</Option>
                        <Option>Stickers</Option>
                        <Option>Postal-card</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products :</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value={"newest"}>Newest</Option>
                        <Option value={"asc"}>Price (asc)</Option>
                        <Option value={"desc"}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filters={filters} sort={sort}/>
            <Footer/>
        </Container>
    )
}

export default Shop
