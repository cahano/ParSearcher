import React from 'react';
import { render, screen } from '@testing-library/react';
import DocParser from '../DocParser';

test('renders learn react link', () => {
  render(<DocParser />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
