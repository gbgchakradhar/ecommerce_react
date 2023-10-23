import styled from 'styled-components'
import Productitem from './Productitem';
import { popularProducts } from '../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
   flex-wrap: wrap;
     justify-content: space-between;
`;
const Product = () => {
    return (
        <Container>{popularProducts.map(item => (
            <Productitem item={item} key={item.id} />
        ))}
        </Container>
    )
}

export default Product