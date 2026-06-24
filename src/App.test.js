import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site name in the navbar', () => {
  render(<App />);
  expect(screen.getAllByText(/Sanhorn Chen/i).length).toBeGreaterThan(0);
});
