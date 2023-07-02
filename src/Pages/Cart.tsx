import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../Responsive";

interface Itopbutton{
  btype : string;
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${Mobile({padding : "10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TopButton = styled.button<Itopbutton>`
  padding: 10px;
  font-weight : 600;
  cursor: pointer;
  border : ${props => props.btype === "filled" && "none"};
  background-color: ${props => props.btype === "filled" ? "black" : "transparent" };
  color : ${props => props.btype === "filled" && "white"};
  ${Mobile({marginRight : "10px"})}
`;

const TopTexts = styled.div`
  ${Mobile({display : "none"})}
`;

const TopText = styled.span`
  text-decoration: underline;
  font-weight: 600;
  margin: 0px 10px;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({flexDirection : "column"})}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  ${Mobile({flexDirection : "column"})}

`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  /* object-fit: cover; */
  height: 300px;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${Mobile({margin : "10px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex : 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div<Itopbutton>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.btype === "total" && "500"};
  font-size: ${props => props.btype === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton btype="">CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>CART (2)</TopText>
              <TopText>WISHLIST (0)</TopText>
            </TopTexts>
            <TopButton btype="filled">PROCEED TO CHECHOUT</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  
                    <Image src="https://m.media-amazon.com/images/I/51PVCk2HLEL._AC_UY1000_.jpg"/>
                    <Details>
                      <ProductName><b>Product: </b>Luffy Cosplay</ProductName>
                      <ProductID><b>ID: </b>121222</ProductID>
                      <ProductSize><b>Size: </b>XL</ProductSize>
                    </Details>
                  
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>Rs 2500</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetails>
                  
                    <Image src="https://m.media-amazon.com/images/I/41TAxv561AL._AC_UY679_.jpg"/>
                    <Details>
                      <ProductName><b>Product: </b>Naruto Cosplay</ProductName>
                      <ProductID><b>ID: </b>121222</ProductID>
                      <ProductSize><b>Size: </b>XL</ProductSize>
                    </Details>
                  
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>Rs 2500</ProductPrice>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem btype="">
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>Rs 5000</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem btype="">
                <SummaryItemText>Delivery Charge</SummaryItemText>
                <SummaryItemPrice>Rs 150</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem btype="">
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>Rs 150</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem btype="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>Rs 5000</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart