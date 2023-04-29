import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
`;

export const AuthLink = styled(NavLink)`
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
