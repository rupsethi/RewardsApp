import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("Validate customer filter should be loaded.", () => {
    render(<App />);
    const filterElement = screen.getByText("Customer Filter:");

    // Assertion
    expect(filterElement).toBeInTheDocument();
  });

  it("Validate default message will reflect if transactions hitory is empty.", () => {
    render(<App />);
    const placeholderElement = screen.getByText(
      "No customer found."
    );

    // Assertion
    expect(placeholderElement).toBeInTheDocument();
  });

  it("Validate customer filter should be loaded even if there is no transaction history.", () => {
    render(<App />);
    const filterElement = screen.getByText("Customer Filter", { exact: false });

    // Assertion
    expect(filterElement).toBeInTheDocument();
  });
});