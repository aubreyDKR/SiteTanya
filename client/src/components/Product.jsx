import styled from "styled-components";
import { ShoppingCartOutlined, InfoOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 15px;
    min-width: 300px;
    max-width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
`;

const ProductName = styled.span`
    margin-top: 5px;
    align-self: flex-start;
`;

const ProductPrice = styled.span`
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
    align-self: flex-start;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <ProductName>{item.name}</ProductName>
            <ProductPrice>{item.price} US$</ProductPrice>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <InfoOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
