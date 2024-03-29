import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import WomenImage from '../images/summergirl.jpg';
import { useState } from "react";
import { sliderItems } from "../data";


const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;

`;
const Arrow = styled.div`
display: flex;
position: absolute;
 background-color: #fff7f7;
width: 50px;
height: 50px;
border-radius: 50%;
align-items: center;
justify-content: center;
z-index: 2;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "0px"};
margin: auto;
cursor: pointer;
opacity: 0.5;

`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;

background-color:#${props => props.bg};
`;

const ImgContainer = styled.div`
height: 100%;
flex:1;


`;
const Image = styled.img`
height: 80%;

`;
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Description = styled.p`
letter-spacing: 3px;
font-weight: 500;
margin: 50px 0px;
font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider