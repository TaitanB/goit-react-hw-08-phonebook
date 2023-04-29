import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - Якщо маршрут обмежено і користувач увійшов до системи, відрендерити <Navigate> для redirectTo
 * - В іншому випадку відрендерити компонент
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
