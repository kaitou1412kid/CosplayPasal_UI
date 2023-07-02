import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${Mobile({padding : "10px",flexDirection : "column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${Mobile({height : "40vh"})}
`;
const InfoContainer = styled.div`
    flex : 1;
    padding: 0 50px;
    ${Mobile({padding : "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    margin: 20px 0;
    display: flex;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Mobile({width : "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin : 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #f2ebeb;
    }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/51PVCk2HLEL._AC_UY1000_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Luffy Custome</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            laborum qui voluptatum cupiditate placeat in porro dolor quae illo
            sit fugiat provident error consequatur voluptate voluptatem impedit
            eaque necessitatibus labore.
          </Desc>
          <Price>$ 10.12</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
