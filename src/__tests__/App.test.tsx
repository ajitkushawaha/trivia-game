// src/App.test.tsx
import React = require('react');
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Trivia Game!/i);
  expect(linkElement).toBeInTheDocument();
});
