import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Projects/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
