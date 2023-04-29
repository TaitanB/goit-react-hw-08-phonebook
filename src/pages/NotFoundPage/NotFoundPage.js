import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { LinkTo, NotFoundContainer } from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <NotFoundContainer
      style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tumbleweed_rolling.jpg/1200px-Tumbleweed_rolling.jpg)`,
      }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Not Found Page</title>
        </Helmet>
        <ErrorText>
          Oops... It looks like this page doesn't exist! Go to{' '}
          <LinkTo to="/">Home</LinkTo>!
        </ErrorText>
      </HelmetProvider>
    </NotFoundContainer>
  );
};

const ErrorText = styled.p`
  margin: auto;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: rgb(232 238 245);
`;
