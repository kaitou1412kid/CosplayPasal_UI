import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://marketplace.canva.com/EAFDurDElGY/1/0/1600w/canva-blue-white-anime-desktop-wallpaper-oNSlxUgbM0o.jpg")
      center;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: wheat;
    opacity: 0.8;
    ${Mobile({width : "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex : 1;
    min-width: 40%;
    margin : 20px 10px 0 0;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Passowrd" />
          <Agreement>
            By creating an account, I consent on exchanging my information bla
            bla bla
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
