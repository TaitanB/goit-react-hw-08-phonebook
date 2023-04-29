import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(66, 75, 92, 0.5);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeText = styled.p`
  max-width: 600px;
  color: rgb(232 238 245);
  font-size: 36px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  background-color: #21212175;
`;

export const LinkTo = styled(Link)`
  color: rgb(232 238 245);

  :hover,
  :focus {
    color: #0303ab;
  }
`;
