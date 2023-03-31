import { render } from '@test/testUtils';
import React from "react";
import Container from '@components/Surfaces/Container';

describe("Container", () => {

  it("should render the Container", () => {
    render(
      <Container>
        <div>Container</div>
      </Container>);
  });
})