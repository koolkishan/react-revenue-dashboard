import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
function MainContent() {
  return (
    <Container>
      <Navbar>
        <Text>
          Good morning,
          <span> Kishan</span>
        </Text>
        <InputContainer>
          <Icon>
            <FiSearch />
          </Icon>
          <Input type="text" placeholder="Search for projects" />
        </InputContainer>
      </Navbar>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <EarningsCard>asdasd</EarningsCard>
            <InfoCard></InfoCard>
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Projects</TitleText>
            <YourProjects></YourProjects>
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices>asdads</Invoices>
            </InvoiceContainer>
            <JoinChannel></JoinChannel>
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Project</TitleText>

            <RecommendProject></RecommendProject>
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;

  &:focus {
    border: none;
    outline: none;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
`;
const EarningsCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #6100d4;
  padding: 1rem;
  border-radius: 1rem;

  color: white;
`;
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
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;

  height: 115%;
  width: 100%;
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
`;
const ColumnOne2 = styled.div`
  /* width: 57%; */
`;
const InvoiceContainer = styled.div`
  height: 50%;
`;
const Invoices = styled.div`
  width: 35rem;
  border-radius: 1rem;

  margin-top: 1rem;
  background-color: white;
  height: 130%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
const JoinChannel = styled.div`
  background-color: #162349;
  height: 70%;
  margin-top: 5.5rem;
  border-radius: 1rem;
`;
const ColumnTwo2 = styled.div``;
const RecommendProject = styled.div`
  border-radius: 1rem;

  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export default MainContent;
