import { render } from '../../../testUtils';
import React from "react";
import Heading from '../../../../components/Typhografy/Heading';

describe("Heading", () => {

    it("should render the Heading", () => {
        render(
            <Heading>
                Send
            </Heading>);
    });
})

