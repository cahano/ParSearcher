import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamPage from '../TeamPage';

test('renders learn react link', () => {
  render(<TeamPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
