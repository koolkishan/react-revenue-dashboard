import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/avatarImage2.jpg";
import AvatarImage2 from "../assets/avatarImage3.jpg";

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Logo design for Bakery</Title>
          <SubTitle>1 day remaining</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} alt="" />
        </Avatar>
        <Detail>
          <Title>Personal branding project</Title>
          <SubTitle>5 days remaining</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See all projects</AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: #6100d4;
  cursor: pointer;
`;

export default Projects;
