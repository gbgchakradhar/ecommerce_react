import styled from "styled-components"

const Container = styled.div`
background-color:teal;
height: 30px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;
`;

const Announcements = () => {
    return (
        <Container><marquee>Super Deal! Get FREE SHIPPING on ORDERS above 35$ </marquee></Container>
    )
}

export default Announcements