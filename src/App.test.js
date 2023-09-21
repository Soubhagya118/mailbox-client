import { screen } from "@testing-library/react";
import App from './App';
import SignUp from "./Authentication/SignUp";
import { renderWithProviders } from '../reducerWithProvider'

test("renders learn react link", () => {
  renderWithProviders(<SignUp />);
  const linkElement = screen.getByText('Sign up');
  expect(linkElement).toBeInTheDocument();
});

test("renders to find button in signup", () => {
  renderWithProviders(<SignUp />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});
