import styled from 'styled-components';

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 480px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff75;
  margin: 0 0 0 auto;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: 26px;
  align-items: center;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  width: 300px;
  font-size: 20px;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: rgba(213, 222, 239, 0.8);
  border-radius: 5px;
  padding: 5px;
  box-shadow: inset rgba(0, 0, 1, 0.2) 0 0 3px 3px;
`;

export const BtnContact = styled.button`
  margin: 20px auto;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #0303ab;
  color: rgb(213 239 230);
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);

  :hover,
  :focus {
    background-color: green;
    scale: 0.9;
  }
`;
