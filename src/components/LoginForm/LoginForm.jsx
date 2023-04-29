import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

import { LogForm, Label, Input, LogBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <h1>Log In</h1>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <LogBtn type="submit">Log In</LogBtn>
    </LogForm>
  );
};
