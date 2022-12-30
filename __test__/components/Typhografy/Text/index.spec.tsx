import { render } from '../../../testUtils';
import React from "react";
import Text from '../../../../components/Typhografy/Text';

describe("Text", () => {

  it("should render the Text", () => {
    render(
    <Text>
        Send
    </Text>);
  });
})

