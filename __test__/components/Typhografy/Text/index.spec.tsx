import { render, screen } from '../../../testUtils';
import React from "react";
import Text from '../../../../components/Typhografy/Text';

describe("Text", () => {

  it("should render the Text", () => {
    render(
      <Text>
        Send
      </Text>);
  });

  it("should render correct props", async () => {
    render(
      <Text>
        Send
      </Text>
    );
    expect(await screen.findByText(/Send/i)).toBeInTheDocument();

  });
})

