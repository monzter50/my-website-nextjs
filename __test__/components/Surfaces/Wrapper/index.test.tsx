import { render } from '@test/testUtils';
import React from "react";
import Wrapper from '@components/Surfaces/Wrapper';

describe("Wrapper", () => {

  it("should render the wrapper", () => {
    render(
    <Wrapper>
        <div>
            <p>Wrapper</p>
        </div>
    </Wrapper>);
  });
})

