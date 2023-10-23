import { categories } from "../data"
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: lightgray;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s; 

  &:hover {
    transform: scale(1.05); /* Make the button 5% bigger on hover */
    background-color: white; /* Change the background color on hover */
  }

  &:active {
    transform: scale(0.95); /* Apply a click effect by making it 5% smaller when clicked */
    background-color: darkgray; /* Change the background color when clicked */
  }
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <Wrapper>
                    <Image src={item.img} key={item.id} />
                    <Info>
                        <Title>{item.title}</Title>
                        <Button>SHOP NOW</Button>
                    </Info>
                </Wrapper>
            ))}
        </Container>
    )
}

export default Categories