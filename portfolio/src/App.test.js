import { render, screen } from '@testing-library/react';
import App from './App';
import LoginPage from './Components/LoginPage';

test('check if test present', () => {
  render(<App />);
  const linkElement = screen.getByText(/myself/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if login comp loads', () => { 
    // -------------------------------------------------
    // const comp = render(<LoginPage/>);
    // const childElement = comp.getByLabelText(/Email/i);
    // OR
    const {getByLabelText } = render(<LoginPage/>);
    const childElement = getByLabelText(/Email/i);
    // -------------------------
    expect(childElement).toBeInTheDocument(); 
 })