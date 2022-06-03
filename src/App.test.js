import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './components/Nav'
import App from './App';

describe('nav component', () => {
  it('renders navbar', () => {
    render(<Nav />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  })

  it('renders tabs, specifically the download tab', () => {
    render(<Nav />);
    const downloadTab = screen.getByText(/download/i);
    expect(downloadTab).toBeInTheDocument();
  })

  it('renders subtabs, specifically the template gallery tab', () => {
    render(<Nav />);    
    const templategallerySubtab = screen.getByText(/template gallery/i);
    expect(templategallerySubtab).toBeInTheDocument();
  })

  it("renders tabs that have no subtabs, specifically the pricing tab", () => {
    render(<Nav />);
    const pricingTab = screen.getByText(/pricing/i);
    expect(pricingTab).toBeInTheDocument();
  });  
})

describe('app component', () => {
  it('headers is "one workspace. every team."', () => {
    render(<App />);
    const header = screen.getByRole("heading", {level: 1});
    expect(header.textContent).toMatch(/one workspace. every team./i);
  })
})