import styled from "styled-components";
import Project from "./Project";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from 'react';
import { CircularProgress } from "@material-ui/core";
import Skeleton from "./Skeleton";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    width: 70%;
    margin: auto;
    column-count: 3;
    column-width: 33%;
    ${mobile({
        width: "90%",
        columnCount: "2",    
        columnWidth: "50%",
    })}
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
