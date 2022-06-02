import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './components/Nav'

describe('nav component', () => {
  it('renders navbar', () => {
    render(<Nav />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  })

  it('renders tabs, specifically the download tab', () => {
    render(<Nav />);
    const downloadTab = screen.queryByText(/download/i);
    expect(downloadTab).toBeInTheDocument();
  })

  it('renders subtabs, specifically the template gallery tab', () => {
    render(<Nav />);    
    const templategallerySubtab = screen.getByText(/template gallery/i);
    expect(templategallerySubtab).toBeInTheDocument();
  })

  it("renders tabs that have no subtabs", () => {
    render(<Nav />);
    const pricingTab = screen.queryByText(/pricing/i);
    expect(pricingTab).toBeInTheDocument();
  });  
})
