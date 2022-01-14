import styled from 'styled-components';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

const Title = styled.h3`
    font-weight: bold;
    margin-bottom: 20px;
`;

const Chart = () => {

    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
        },
        {
            name: 'Mar',
            "Active User": 6000,
        },
        {
            name: 'Apr',
            "Active User": 2000,
        },
        {
            name: 'May',
            "Active User": 5000,
        },
        {
            name: 'Jun',
            "Active User": 1000,
        },
        {
            name: 'Jul',
            "Active User": 4000,
        },
        {
            name: 'Agu',
            "Active User": 3000,
        },
        {
            name: 'Sep',
            "Active User": 8000,
        },
        {
            name: 'Oct',
            "Active User": 10000,
        },
        {
            name: 'Nov',
            "Active User": 5000,
        },
        {
            name: 'Dec',
            "Active User": 3000,
        },
    ];

    return (
        <Container>
            <Title>User Analytics</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="purple" />
                    <Line type="monotone" dataKey="Active User" stroke="purple" />
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf"/>
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart
