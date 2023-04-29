import { useAuth } from '../../hooks/useAuth';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import bgHome from '../../image/bgHome.jpg';
import { HomeContainer, HomeText, LinkTo } from '../Home/Home.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts App</title>
      </Helmet>
      <HomeContainer style={{ backgroundImage: `url(${bgHome})` }}>
        {isLoggedIn ? (
          <HomeText>
            Go to the <LinkTo to="/contacts">Contacts</LinkTo> tab to see the
            list of contacts
          </HomeText>
        ) : (
          <HomeText>
            This application is designed to store a list of contacts, allows you
            to add, delete, and search for contacts by name. To access the
            functionality, register or sign in with your account.
          </HomeText>
        )}
      </HomeContainer>
    </HelmetProvider>
  );
}

// qwerty12345@i.ua
