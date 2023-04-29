import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { RegisterContainer } from './Register.styled';
import bgRegistr from '../../image/bgRegistr.jpg';

export default function Register() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterContainer style={{ backgroundImage: `url(${bgRegistr})` }}>
        <RegisterForm />
      </RegisterContainer>
    </HelmetProvider>
  );
}
