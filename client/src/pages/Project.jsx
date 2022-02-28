import styled from "styled-components";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import {mobile, tablet} from "../responsive";
import { Autorenew } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    ${mobile({
        width: "90%",
    })}
`;

const Image = styled.img`
    height: 100%;
    max-height: 100vh;
    object-fit: scale-down;
    ${mobile({
        height: "auto",
        maxHeight: "100vh",
    })}
`;

const Title = styled.h1`
    text-align: center;
`;

const Project = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [project, setProject] = useState({imgs: []});
    
    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await publicRequest.get("/projects/find/"+id);
                setProject(res.data);
            } catch(err) {};
        };
        getProject();
    },[id]);

    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>Project : {project.name}</Title>
                <Image src={project.imgCover}></Image>
                {project.imgs.map((img) => (
                    <Image src={img}/>
                ))}
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Project
