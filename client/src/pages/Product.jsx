import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
    font-family: 'Rozha One', serif;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch(err) {};
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if(type === "decrease") {
            setQuantity(prev => prev-1);
        } else {
            setQuantity(prev => prev+1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...product, quantity, price:product.price*quantity }));
    }

    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Description>
                        {product.desc}
                    </Description>
                    <Price>{product.price}$</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("decrease")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("increase")}/>
                        </AmountContainer>
                        <Button onClick={() => handleClick()}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
