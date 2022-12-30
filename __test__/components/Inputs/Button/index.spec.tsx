import { render } from '../../../testUtils';
import React from "react";
import Button from '../../../../components/inputs/Button';

describe("Button", () => {

  it("should render the Button", () => {
    render(
    <Button>
        Send
    </Button>);
  });
})

