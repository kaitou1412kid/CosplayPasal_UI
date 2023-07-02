import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { Mobile } from "../Responsive";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  height: 50px;
  ${Mobile({ height: "40px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ padding: "5px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${Mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${Mobile({ fontSize: "13px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${Mobile({ fontSize: "14px", marginLeft: "5px" })}
`;

const Button = styled.button<any>`
  background-color: transparent;
  border: none;
  font-size: ${props => props.btype === "logo" ? "27px" : "16px"};
  font-weight: ${props => props.btype === "logo" && "600"};
  cursor: pointer;
`;

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Button btype="logo" onClick={()=>Navigate("/")}>COSPLAY PASAL.</Button></Logo>
        </Center>
        <Right>
          <MenuItem><Button onClick={()=>Navigate("/register")}>REGISTER</Button></MenuItem>
          <MenuItem><Button onClick={()=>Navigate("/Login")}>SIGN IN</Button></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
