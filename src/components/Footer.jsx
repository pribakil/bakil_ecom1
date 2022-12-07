import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter, WhatsApp } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fff8f8"})}
`;

const Logo = styled.h1`
  
`;

const Descrition = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>YO-SHOP</Logo>
        <Descrition>
          This is a platform where people can buy or order staffs for a
          delivering and where Merchants can sell staffs.
        </Descrition>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="00E623">
                <WhatsApp />
            </SocialIcon>
            <SocialIcon>
                <LinkedIn />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Card</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Ortder Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}} /> 13 bukasa, socopao, Limete 1er Rue Industriel
        </ContactItem>
        <ContactItem>
           <Phone style={{marginRight:"10px"}} /> +243 82 84 140 84
        </ContactItem>
        <ContactItem>
           <MailOutline style={{marginRight:"10px"}} /> bakengailunga@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
