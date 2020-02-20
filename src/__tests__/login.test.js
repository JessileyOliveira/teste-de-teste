/*global describe it expect */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Login from '../pages/Login';

describe('Login Tests', () => {
  it('should exist a login form', () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('login-form')).toBeTruthy();
  });

  it('should exist a username input in login form', () => {
    const { getByTestId, getByLabelText } = render(<Login />);

    expect(getByTestId('login-form')).toContainElement(
      getByLabelText('Username')
    );
  });

  it('should exist a password input in login form', () => {
    const { getByTestId, getByLabelText } = render(<Login />);

    expect(getByTestId('login-form')).toContainElement(
      getByLabelText('Password')
    );
  });

  it('should the type of input password is password', () => {
    const { getByLabelText } = render(<Login />);

    expect(getByLabelText('Password')).toHaveProperty('type', 'password');
  });
});
