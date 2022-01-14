import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Title = styled.h1`
    text-align: center;
    margin: 50px 0px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 70%;
    margin: 0px auto 25px auto;
`;

const Portrait = styled.img`
    width: 400px;
    object-fit: scale-down;
    align-self: flex-start;
`;

const Right = styled.div`
    margin: 20px;
`;

const Text = styled.p`
    text-align: justify;
`;

const Author = styled.p`
    text-align: right;
    margin: 20px 0px;
`;

const About = () => {
    return (
        <Container>
            <Navbar/>
            <Title>About Me</Title>
            <Wrapper>
                <Portrait src="https://sun9-49.userapi.com/impf/c837429/v837429916/5cc7e/Q9CEfEFF7g8.jpg?size=1280x1280&quality=96&sign=23063a57779cef0291940fcd6ef79423&type=album"/>
                <Right>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magni, accusamus modi ut exercitationem nisi 
                        incidunt nobis quo voluptas consequuntur, autem quis, laborum similique. Laudantium commodi eligendi, omnis 
                        facilis rem ratione incidunt est enim obcaecati! Porro sint sunt enim provident, quis illum dignissimos eius, 
                        voluptatibus eligendi voluptates hic inventore ea vitae est! Aliquid recusandae debitis exercitationem neque 
                        animi eum nihil molestias eaque laudantium repellendus suscipit assumenda saepe quod, magni dignissimos 
                        corporis nam possimus quis facilis hic ipsum aspernatur. Iste suscipit veniam quam illo, reprehenderit 
                        porro debitis, atque, magni labore earum nemo ad sunt est unde numquam deserunt ullam dolor adipisci iusto. 
                        Ab molestias quo delectus dicta hic quam a blanditiis, nam voluptatum, fugit sint tempora. Possimus a modi quisquam 
                        suscipit, aperiam alias, harum dolores unde sed cupiditate temporibus voluptate assumenda perferendis eos cum minus 
                        facilis in, vero eveniet nulla. Ratione, quam dignissimos harum hic sint quas nam illum quisquam libero praesentium 
                        expedita modi reiciendis odit non iste eius, cumque officia nisi corrupti vero laboriosam vel laborum qui? 
                        Recusandae ut facilis maiores debitis nam doloribus illo ab, sequi saepe ullam necessitatibus natus deleniti 
                        nihil quasi, cum unde. Impedit eaque molestiae illo consequuntur vel, nemo fugiat at itaque necessitatibus 
                        neque nam praesentium sunt reprehenderit labore cum molestias, deserunt quia quibusdam eligendi! Totam ipsa 
                        porro vitae impedit dicta deleniti laborum, id deserunt ex magni aperiam ratione, fugiat reprehenderit a 
                        officiis similique beatae quas amet distinctio? Odio, praesentium labore atque cupiditate sint unde, dolorem 
                        sunt nesciunt, magni nostrum exercitationem quod. Dolor aliquam ut non vitae voluptate excepturi totam quibusdam 
                        fuga repudiandae similique mollitia repellendus facilis minus quod cumque eos dolorem ex iste aperiam distinctio 
                        soluta, molestias corporis placeat debitis. Eligendi quas quibusdam corporis hic architecto labore, libero autem, 
                        magnam porro vitae cupiditate similique cumque qui minima odit esse exercitationem voluptatum voluptate quo accusamus 
                        ullam.
                    </Text>
                    <Author>-Tatiana.Dekker</Author>
                </Right>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default About
