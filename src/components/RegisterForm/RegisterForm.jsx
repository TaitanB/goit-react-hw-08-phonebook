import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { RegForm, Label, Input, RegisterBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <h1>Registration</h1>
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </RegForm>
  );
};
