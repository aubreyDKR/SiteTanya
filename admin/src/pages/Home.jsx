import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import WidgetLg from '../components/widgets/WidgetLg';
import WidgetSm from '../components/widgets/WidgetSm';

const Container = styled.div`
    flex: 4;
`;

const WidgetsContainer = styled.div`
    display: flex;
    margin: 20px;
`;

const Home = () => {
    return (
        <Container>
            <FeaturedInfo/>
            <Chart/>
            <WidgetsContainer>
                <WidgetSm/>
                <WidgetLg/>
            </WidgetsContainer>
        </Container>
    )
}

export default Home
