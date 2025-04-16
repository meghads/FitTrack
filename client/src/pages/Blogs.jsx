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

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogItem = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.bg};
  border-left: 6px solid ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + "20"};
  border-radius: 10px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const BlogText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
  line-height: 1.6;
`;

const Blogs = () => {
  return (
    <Container>
      <Title>Latest Blog Posts</Title>
      <Description>
        Insights, tips, and stories from the FitTrack community
      </Description>
      <BlogList>
        <BlogItem>
          <BlogTitle>How to Stay Fit with a Busy Schedule</BlogTitle>
          <BlogText>
            Discover quick workouts and time-saving tips to maintain your health
            when life gets hectic.
          </BlogText>
        </BlogItem>
        <BlogItem>
          <BlogTitle>The Science Behind Muscle Recovery</BlogTitle>
          <BlogText>
            Understand how recovery works and what your body needs after intense
            workouts.
          </BlogText>
        </BlogItem>
        <BlogItem>
          <BlogTitle>Nutrition Hacks for Weight Loss</BlogTitle>
          <BlogText>
            Learn easy and sustainable ways to eat smarter without feeling
            deprived.
          </BlogText>
        </BlogItem>
      </BlogList>
    </Container>
  );
};

export default Blogs;
