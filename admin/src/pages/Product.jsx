import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductData } from '../api';

const Container = styled.div`
    
`;

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                await getProductData(setProduct, id);
            } catch(err) {
                console.log(err);
            }   
        };
        getProduct();
    }, []);


    return (
        <Container>
            
        </Container>
    )
}

export default Product
