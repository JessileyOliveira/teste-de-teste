import React, { useState } from 'react';
import { Container, Form } from './styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = evt => {
    evt.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmitForm} data-testid="login-form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
