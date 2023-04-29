import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { LoginContainer } from './Login.styled';
import bgLogin from '../../image/bgLogin.jpg';

export default function Login() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginContainer style={{ backgroundImage: `url(${bgLogin})` }}>
        <LoginForm />
      </LoginContainer>
    </HelmetProvider>
  );
}
