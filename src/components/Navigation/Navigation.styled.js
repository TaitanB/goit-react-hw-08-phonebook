import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  color: rgb(232 238 245);
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;

  :hover,
  :focus {
    color: #0303ab;
    scale: 1.2;
  }
`;
