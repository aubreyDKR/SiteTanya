import styled from 'styled-components';

const Container = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    padding: 20px;
`;

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 10px;

`;

const Tr = styled.tr`

`;
const Th = styled.th`
    text-align: left;
`;

const Td = styled.td`
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserName = styled.span``;

const Date = styled.span`
    color: grey;
`;

const Amount = styled.span`
    color: grey;
`;

const ButtonsContainer = styled.div``;

const Button = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.type === "approved" ? "#e5faf2"
        : props.type === "declined" ? "#fff0f1"
            : props.type === "pending" && "#ebf1fe"
    };
    color: ${props => props.type === "approved" ? "#3bb077"
        : props.type === "declined" ? "#d95087"
            : props.type === "pending" && "#2a7ade"
    };
`;

const WidgetLg = () => {
    return (
        <Container>
            <Title>Latest transactions</Title>
            <Table>
                <Tr>
                    <Th>Customer</Th>
                    <Th>Date</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                </Tr>
                <Tr>
                    <Td>
                        <User>
                            <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg" />
                            <UserName>Tatiana Dekker</UserName>
                        </User>
                    </Td>
                    <Td>
                        <Date>2 Jun 2021</Date>
                    </Td>
                    <Td>
                        <Amount>12$</Amount>
                    </Td>
                    <Td>
                        <ButtonsContainer>
                            <Button type="approved">Approved</Button>
                        </ButtonsContainer>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <User>
                            <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg" />
                            <UserName>Tatiana Dekker</UserName>
                        </User>
                    </Td>
                    <Td>
                        <Date>2 Jun 2021</Date>
                    </Td>
                    <Td>
                        <Amount>12$</Amount>
                    </Td>
                    <Td>
                        <ButtonsContainer>
                            <Button type="declined">Declined</Button>
                        </ButtonsContainer>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <User>
                            <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg" />
                            <UserName>Tatiana Dekker</UserName>
                        </User>
                    </Td>
                    <Td>
                        <Date>2 Jun 2021</Date>
                    </Td>
                    <Td>
                        <Amount>12$</Amount>
                    </Td>
                    <Td>
                        <ButtonsContainer>
                            <Button type="pending">Pending</Button>
                        </ButtonsContainer>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <User>
                            <UserImg src="https://st3.depositphotos.com/3854637/32498/v/1600/depositphotos_324988148-stock-illustration-head-little-european-girl-profile.jpg" />
                            <UserName>Tatiana Dekker</UserName>
                        </User>
                    </Td>
                    <Td>
                        <Date>2 Jun 2021</Date>
                    </Td>
                    <Td>
                        <Amount>12$</Amount>
                    </Td>
                    <Td>
                        <ButtonsContainer>
                            <Button type="pending">Pending</Button>
                        </ButtonsContainer>
                    </Td>
                </Tr>
            </Table>
        </Container>
    )
}

export default WidgetLg
