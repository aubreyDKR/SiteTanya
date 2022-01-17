import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 10px;
    width: 500px;
    height: 800px;
    max-width: 100%;
    background-color: rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
`;

const Skeleton = () => {
    return (
        <Container>
            <CircularProgress style={{'color': 'white'}}/>
        </Container>
    )
}

export default Skeleton
