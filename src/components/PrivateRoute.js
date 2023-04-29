import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * - Якщо маршрут приватний і користувач авторизований, відрендерити компонент
 * - В іншому випадку відрендерити <Navigate> для redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
