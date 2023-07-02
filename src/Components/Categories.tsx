import styled from "styled-components"
import { categories } from "../Data";
import Categoriesitem from "./Categoriesitem";
import { Mobile } from "../Responsive";
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({padding : "0px", flexDirection : "column"})}
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <Categoriesitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories