import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Thomas Martin</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>
          Need a designer to form branding essentials for my business.
        </Title>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding
          materials for my new startup.
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`;
const Price = styled.div``;

export default ProjectRecommendation;
