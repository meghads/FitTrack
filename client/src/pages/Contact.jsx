import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
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
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.secondary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text_secondary + "20"};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.bg};
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text_secondary + "20"};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.bg};
`;

const Button = styled.button`
  padding: 0.9rem 1.2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>
        We’d love to hear from you! Drop your questions or feedback below.
      </Description>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;
