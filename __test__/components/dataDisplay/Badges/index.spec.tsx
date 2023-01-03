import { render, screen } from '../../../testUtils';
import React from "react";
import Badges from '../../../../components/dataDisplay/Badges';

describe("Badges", () => {

  it("should render the Badges", async () => {
    render(<Badges/>);
  });
  
  it("should render the badges online", async () => {
    render(<Badges/>);
    expect(await screen.findByText(/online/i)).toBeInTheDocument();

  });

  it("should render the badges offline", async () => {
    render(<Badges active={false}/>);
    expect(await screen.findByText(/offline/i)).toBeInTheDocument();

  });
})