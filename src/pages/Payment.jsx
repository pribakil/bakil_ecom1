import styled from "styled-components"
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
         url("../images/pic2.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  ${mobile({width:"75%"})}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Payment = () => {
  const onTonken = (token)=>{
    console.log("Token => ", token);
  }
const KEY = process.env.SRIPE_KEY;

  return (
    <Container>
        <Wrapper>
        <Form>
          <StripeCheckout
            name="Yo Shop"
            image="/images/bip_logo.png"
            billingAddress
            shippingAddress
            description="Your total is 20$"
            amount={2000}
            token={onTonken}
            stripeKey={KEY}
          >
            <Button>Pay Now</Button>
          </StripeCheckout>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Payment