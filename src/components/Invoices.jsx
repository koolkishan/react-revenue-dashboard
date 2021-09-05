import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage5.jpg";
import AvatarImage2 from "../assets/avatarImage6.jpg";

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Alexander Williams</Title>
              <SubTitle>ABC Holdings</SubTitle>
            </TextContainer>
          </Info>
          <Badge content="Paid" paid />
          <Price>$ 1,200.87</Price>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>John Philips</Title>
              <SubTitle>Inchor Associates</SubTitle>
            </TextContainer>
          </Info>
          <Badge content="Late" late />
          <Price>$ 1,200.87</Price>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const CardContent = styled.div``;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;
const Price = styled.div``;

export default Invoices;
