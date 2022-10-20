import { render } from '../../../testUtils';
import React from "react";
import Code from '../../../../components/dataDisplay/Code';

describe("Code", () => {

  it("should render the code", () => {
    render(<Code>Codigo</Code>);
  });
})