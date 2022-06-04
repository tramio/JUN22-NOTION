import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

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

  it('subnavs are hidden on render', () => {
    render(<Nav />);
    const subnavs = screen.getAllByTestId('subnav');
    subnavs.forEach((subnav) => {
      expect(subnav.classList).toContain("hidden");
    })
  })

  it("renders tabs that have no subtabs, specifically the pricing tab", () => {
    render(<Nav />);
    const pricingTab = screen.getByText(/pricing/i);
    expect(pricingTab).toBeInTheDocument();
  });  

  it('segments tabs submenus by category; specifically a segment "by team size" should appear in the solutions submenu', () => {
    render(<Nav />);
    const byteamsizeText = screen.getByText(/by team size/i);
    expect(byteamsizeText).toBeInTheDocument();
  })

  it('displays a corresponding subnav on tab hover, specifically "template gallery" on "product" hover', () => {
    render(<Nav />);
    const tab = screen.getByText(/product/i);
    const subnav = // query method

    userEvent.hover(tab);
    expect(subnav.classList).not.toContain("hidden");
    // userEvent.unhover(tab);
    // expect(subnav.classList).toContain("hidden");
  })

  it('each tab has an id, specifically the download tab', () => {
    const tab = screen.queryByTestId('download-tab');
    expect(tab).toBeTruthy();
  })
})

describe('app component', () => {
  it('headers is "one workspace. every team."', () => {
    render(<App />);
    const header = screen.getByRole("heading", {level: 1});
    expect(header.textContent).toMatch(/one workspace. every team./i);
  })
})