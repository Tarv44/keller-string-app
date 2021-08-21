import React from 'react';
import styled from 'styled-components';

const SignupInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        placeholder='Enter email address here...'
        aria-label='Email Address'
      />
      <Button>Submit</Button>
    </Form>
  );
};
export default SignupInput;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;

  input,
  button {
    font-family: 'Libre Franklin';
    height: 40px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {
  }
  @media (min-width: 1200px) {
    input,
    button {
      height: 50px;
    }
  }
  @media (min-width: 1440px) {
    width: 429px;
  }
`

const Input = styled.input`
  width: 228px;
  font-size: 14px;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0 14px;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    padding: 0 16px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    width: 280px;
  }
`

const Button = styled.button`
  width: 121.5px;
  font-size: 16px;
  background: var(--color-primary);
  color: #ffffff;
  border-radius: 0 5px 5px 0;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    width: 149px;
  }
`