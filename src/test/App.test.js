import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('renders "Hola mundo"', () => {
  // Arrange
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Act
  const divElement = screen.getByText(/Hola mundo/i);
  // Assert
  expect(divElement).toBeInTheDocument();
});
