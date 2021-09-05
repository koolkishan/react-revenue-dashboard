import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In top 20%</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>8 this month</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="mobile app" glow />
            <Badge content="branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: #6100d4;
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Info;
