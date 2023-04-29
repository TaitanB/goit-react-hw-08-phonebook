import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(66, 75, 92, 0.5);
`;

export const LinkTo = styled(Link)`
  color: rgb(232 238 245);

  :hover,
  :focus {
    color: #0303ab;
  }
`;
