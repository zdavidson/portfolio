import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn name', () => {
  render(<App />);
  const linkElement = screen.getByText(/zoë davidson/i);
  expect(linkElement).toBeInTheDocument();
});
