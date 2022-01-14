import axios from "axios";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: lightgray;
`;

const Wrapper = styled.div`
    background: white;
    margin: auto;
`;

const Button = styled.button`
    padding: 10px;
`;

const addProject = () => {

    const handleClick = async () => {
        try {
            const res = await publicRequest.post("/projects", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },

                imgCover: "https://static.wixstatic.com/media/1270ed_9152541d82b3419193fcb4cd7c46fae7~mv2.jpg/v1/fill/w_600,h_921,al_c,q_85,usm_0.66_1.00_0.01/MOONCHILD%20COVER%5B1%5D.webp",
                name: "MOONCHILD: VOYAGE OF THE LOST AND FOUND",
                imgs: [
                    "https://static.wixstatic.com/media/1270ed_2b6ef01cddac483fb37a608fef5e5545~mv2.jpg/v1/crop/x_0,y_421,w_2480,h_2574/fill/w_600,h_623,al_c,q_85,usm_0.66_1.00_0.01/ILLO%201%20FINAL%20(1).webp",
                    "https://static.wixstatic.com/media/1270ed_0424e0a0c2a042ccbb36fdaaa9e6129a~mv2.jpg/v1/fill/w_808,h_571,al_c,q_85,usm_0.66_1.00_0.01/ILLO%204%20FINAL%20(1).webp",
                    "https://static.wixstatic.com/media/1270ed_dc583fd0c78f4dbc9e837c84d341619d~mv2.jpg/v1/fill/w_600,h_849,al_c,q_85,usm_0.66_1.00_0.01/ILLO%203%20FINAL%20(1).webp",
                    "https://static.wixstatic.com/media/1270ed_1e57ce70cdc342aba29b7b523688871a~mv2.jpg/v1/fill/w_800,h_565,al_c,q_85,usm_0.66_1.00_0.01/ILLO%205%20FINAL%20(1).webp"
                ],
            });
        } catch(err) {
            console.log(err);
        };
    }

    return (
        <Container>
            <Wrapper>
                <Button onClick={handleClick}>Add Project</Button>
            </Wrapper>
        </Container>
    )
}

export default addProject
