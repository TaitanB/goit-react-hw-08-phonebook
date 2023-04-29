import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

import { UserMenuContainer, BtnLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <p>
        Welcome, <b>{user.name}</b>{' '}
      </p>
      <BtnLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogout>
    </UserMenuContainer>
  );
};
