import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.bg};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + "20"};
  padding-bottom: 0.5rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.secondary};
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StepCard = styled.div`
  background: ${({ theme }) => theme.bg};
  border-left: 6px solid ${({ theme }) => theme.primary};
  padding: 1.5rem;
  border-radius: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + "20"};
`;

const StepTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const StepText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.black};
`;

const Tutorials = () => {
  return (
    <Container>
      <Title>How to Use FitTrack</Title>
      <Description>
        Your guide to navigating the FitTrack app effectively
      </Description>
      <StepList>
        <StepCard>
          <StepTitle>1. Sign Up or Log In</StepTitle>
          <StepText>
            Create an account or log in to start tracking your fitness journey.
          </StepText>
        </StepCard>
        <StepCard>
          <StepTitle>2. Set Your Goals</StepTitle>
          <StepText>
            Pick your fitness goal — lose weight, build muscle, or maintain
            health.
          </StepText>
        </StepCard>
        <StepCard>
          <StepTitle>3. Log Your Workouts</StepTitle>
          <StepText>
            Enter your daily workouts and track progress with ease.
          </StepText>
        </StepCard>
        <StepCard>
          <StepTitle>4. Analyze Progress</StepTitle>
          <StepText>
            View charts and trends to see how far you’ve come.
          </StepText>
        </StepCard>
        <StepCard>
          <StepTitle>5. Stay Consistent</StepTitle>
          <StepText>
            Use reminders and motivational tips to keep moving forward.
          </StepText>
        </StepCard>
      </StepList>
    </Container>
  );
};

export default Tutorials;
