import styled from "styled-components";
import Project from "./Project";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from 'react';
import { CircularProgress } from "@material-ui/core";
import Skeleton from "./Skeleton";

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
    const [projectsAreLoading, setProjectsAreLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            setProjectsAreLoading(true);
            try {
                const res = await publicRequest.get("/projects");
                setProjects(res.data);
            } catch(err) {
            }
            setProjectsAreLoading(false);
        };
        getProjects();
    }, []);

    return (
        <Container>
            {projectsAreLoading ? (
                <>
                <Skeleton/>
                </>
            ) : (
                projects.map((item) => (
                    <Project item={item} key={item._id}/>
                ))
            )}
        </Container>
    )
}

export default Gallery
