import { render } from '../../testUtils';
import React from "react";
import Header from '../../../components/Header';

describe("Header", () => {

  it("should render the Header", () => {
    render(<Header/>);
  });
})