import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './components/Nav'

test('renders navbar', () => {
  render(<Nav />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
})