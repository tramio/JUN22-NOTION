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
    const subnav1 = screen.getByTestId('subnav-1');
    expect(subnav1.classList).toContain("hidden");
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

  it('displays a corresponding subnav on tab hover, specifically the "template gallery" subtab should appear on "product" hover', () => {
    render(<Nav />);
    const tab = screen.getByTestId("tab-1");
    const subnav1 = screen.getByTestId("subnav-1");

    userEvent.hover(tab);
    expect(subnav1.classList).not.toContain("hidden");
  })

  // it('hides a corresponding subnav on tab mouseLeave', () => {
  //   render(<Nav />);
  //   const tab = screen.getByTestId("tab-1");
  //   const subnav1 = screen.getByTestId("subnav-1");

  //   userEvent.unhover(tab);
  //   expect(subnav1.classList).toContain("hidden");
  // })
})

describe('app component', () => {
  it('headers is "one workspace. every team."', () => {
    render(<App />);
    const header = screen.getByRole("heading", {level: 1});
    expect(header.textContent).toMatch(/one workspace. every team./i);
  })
})