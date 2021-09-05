import React from "react";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";

function JoinSlack() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHead>Engage with clients</SlackHead>
            <SlackFoot>Join slack channel</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Join Now</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
}

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const JoinChannel = styled.div`
  background-color: #162349;
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
`;

const Slack = styled.div`
  display: flex;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: white;
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;
const SlackFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const SlackJoin = styled.button`
  background-color: #6100d4;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default JoinSlack;
