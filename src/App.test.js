import { screen } from "@testing-library/react";
import App from './App';
import SignUp from "./Authentication/SignUp";
import SignIn from './Authentication/SignIn';
//import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component

import { renderWithProviders } from '../reducerWithProvider'

test("renders learn react link", () => {
  renderWithProviders( <Router>
    <SignUp />
  </Router>);
  const linkElement = screen.getByText('Sign up');
  expect(linkElement).toBeInTheDocument();
});

test("renders to find button in signup", () => {
  renderWithProviders( <Router>
    <SignUp />
  </Router>);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

test("renders to find input in signup", () => {
  renderWithProviders( <Router>
    <SignUp />
  </Router>);
  const linkElement = screen.getByTestId('input-field');
  expect(linkElement).toHaveValue('');
});

test("renders to find placeholder in signup", () => {
  renderWithProviders( <Router>
    <SignUp />
  </Router>);
  const linkElement = screen.getByPlaceholderText('Email');
  expect(linkElement).toBeInTheDocument();
});
test("renders to find text in signup", () => {
  renderWithProviders( <Router>
    <SignUp />
  </Router>);
  const linkElement = screen.getByText("Have an account?");
  expect(linkElement).toBeInTheDocument();
});



// =============================================================================//
//                               sign in                                       //
//============================================================================//                                               

 describe("login", () => {
 test("renders to find button in signin", () => {
  renderWithProviders( <Router>
    <SignIn />
  </Router>);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});
test("renders to find text in signin", () => {
  renderWithProviders( <Router>
    <SignIn />
  </Router>);
  const linkElement = screen.getByText('SignIn');
  expect(linkElement).toBeInTheDocument();
});

test("renders to find input in signin", () => {
  renderWithProviders( <Router>
    <SignIn />
  </Router>);
  const linkElement = screen.getByTestId('input-field');
  expect(linkElement).toHaveValue('');
});

test("renders to find placeholder in signin", () => {
  renderWithProviders( <Router>
    <SignIn />
  </Router>);
  const linkElement = screen.getByPlaceholderText('Email');
  expect(linkElement).toBeInTheDocument();
});
test("renders to find text in signin", () => {
  renderWithProviders( <Router>
    <SignIn />
  </Router>);
  const linkElement = screen.getByText("Don't have an account?");
  expect(linkElement).toBeInTheDocument();
});


 });