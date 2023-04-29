import styled from 'styled-components';

export const FilterWraper = styled.div`
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
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
