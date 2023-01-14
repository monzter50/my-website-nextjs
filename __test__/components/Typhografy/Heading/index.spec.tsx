import { render, screen } from '../../../testUtils';
import React from "react";
import Heading from '../../../../components/Typhografy/Heading';

describe("Heading", () => {

    it("should render the Heading", () => {
        render(
            <Heading>
                Send
            </Heading>);
    });
    it("should render correct props", async () => {
        render(
          <Heading>
            Send
          </Heading>
        );
        expect(await screen.findByText(/Send/i)).toBeInTheDocument();
    
      });
})

