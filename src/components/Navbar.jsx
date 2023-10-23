import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
display: flex;
align-items:center ;
margin-left: 25px;
padding: 5px;
border: 0.5px solid lightgray;
`;

const Input = styled.input`
    border: none;
`;

const Centre = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.div`
font-weight: bold;
font-size: 30px;
`;

const Right = styled.div`
flex: 1;
justify-content: end;
align-items: center;
display: flex;

`;

const MenuItem = styled.div`
cursor: pointer;
margin-left: 25px;
font-size: 14px;
`;

const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Centre>
                    <Logo>
                        GBG.
                    </Logo>
                </Centre>
                <Right>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={3} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar