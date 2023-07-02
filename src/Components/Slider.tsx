import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import styled from "styled-components";
import { SliderData } from "../Data";
import { useState } from "react";
import { Mobile } from "../Responsive";
import { useNavigate } from "react-router-dom";


interface Iprops {
  direction: string;
}

interface Islides {
  bg: string;
}

interface Iwrapper {
  slideIndex : number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Mobile({display : "none"})}
`;

const Arrow = styled.div<Iprops>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div<Iwrapper>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slides = styled.div<Islides>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin: 5% 30%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 78px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const Navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);  
  const handleClick = (direction : any)=>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };
  
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowBackIosRounded />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {SliderData.map(items => (

          <Slides bg={items.bg} key={items.id}>
          <ImgContainer>
            <Image src={items.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{items.title}</Title>
            <Desc>{items.desc}</Desc>
            <Button onClick={()=>Navigate("/productlist")}>SHOP NOW</Button>
          </InfoContainer>
        </Slides>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick("right")}>
        <ArrowForwardIosRounded />
      </Arrow>
    </Container>
  );
};

export default Slider;
