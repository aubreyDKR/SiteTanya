import styled from "styled-components";
import { Link } from 'react-router-dom';

const Overlay = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 10px;

    &:hover ${Overlay}{
        opacity: 0.5;
    }
`;

const Image = styled.img`
    max-width: 100%;
    height: 100%;
`;

const Project = ({ item }) => {
    return (
        <Container>
            <Image src={item.imgCover} />
            <Link to={`/project/${item._id}`}>
                <Overlay />
            </Link>
        </Container>
    )
}

export default Project
