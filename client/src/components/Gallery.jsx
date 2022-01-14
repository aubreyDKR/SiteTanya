import styled from "styled-components";
import Project from "./Project";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from 'react';

const Container = styled.div`
    width: 70%;
    margin: auto;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
`;

const Gallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await publicRequest.get("/projects");
                setProjects(res.data);
            } catch(err) {
            }
        };
        getProjects();
    }, []);

    return (
        <Container>
            {projects.map((item) => (
                <Project item={item} key={item._id}/>
            ))}
        </Container>
    )
}

export default Gallery
