import { render, screen } from '../../../testUtils';
import userEvent from "@testing-library/user-event";

import React from "react";
import Tooltip from '../../../../components/dataDisplay/Tooltip';

describe("Badges",  () => {

  it("should render the Badges", async () => {
    render(
    <Tooltip title="Github">
        <p>Tooltip :)</p>
    </Tooltip>);
      const iconTooltop = screen.findByRole('alert')

      userEvent.click(await iconTooltop)
      expect(await screen.findByText(/Github/i)).toBeInTheDocument();
  });
  

 
})