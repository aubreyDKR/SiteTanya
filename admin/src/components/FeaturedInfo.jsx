import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Item = styled.div`
    flex: 1;
    margin: 20px 20px 0px 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const Title = styled.span`

`;

const Data = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

const MoneyRate = styled.span`
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

const ArrowDecrease = styled(ArrowDownward)`
    color: red;
    font-size: 14px !important;
    margin-left: 5px;
`;

const ArrowIncrease = styled(ArrowUpward)`
    color: green;
    font-size: 14px !important;
    margin-left: 5px;
`;

const Sub = styled.span`
    font-size: 15px;
    color: gray;
`;

const FeaturedInfo = () => {
    return (
        <Container>
            <Item>
                <Title>Income</Title>
                <Data>
                    <Money>2.215$</Money>
                    <MoneyRate>-11.4<ArrowDecrease/></MoneyRate>
                </Data>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Sales</Title>
                <Data>
                    <Money>4.415$</Money>
                    <MoneyRate>-1.4<ArrowDecrease/></MoneyRate>
                </Data>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Cost</Title>
                <Data>
                    <Money>2.225$</Money>
                    <MoneyRate>+2.4<ArrowIncrease/></MoneyRate>
                </Data>
                <Sub>Compared to last month</Sub>
            </Item>
        </Container>
    )
}

export default FeaturedInfo
