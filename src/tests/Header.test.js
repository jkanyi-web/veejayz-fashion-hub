import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the header with a link', () => {
  render(<Header />);
  const linkElement = screen.getByRole('link', { name: 'Veejayz-Hub' });

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/');
  expect(linkElement).toHaveTextContent('Veejayz-Hub');
});
