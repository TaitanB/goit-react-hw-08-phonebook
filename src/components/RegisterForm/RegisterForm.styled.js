import styled from 'styled-components';

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 320px;
  background-color: #ffffff75;
  padding: 20px;
  border-radius: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: rgba(213, 222, 239, 0.8);
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: inset rgba(0, 0, 1, 0.2) 0 0 3px 3px;
`;

export const RegisterBtn = styled.button`
  text-decoration: none;
  margin: auto;
  padding: 5px 10px;
  border: 1px solid #0303ab;
  border-radius: 5px;
  background-color: #0303ab;
  color: rgb(213 239 230);
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);

  :hover,
  :focus {
    background-color: green;
    border: 1px solid green;
    scale: 0.9;
  }
`;
