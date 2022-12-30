import { render } from '../../testUtils';
import React from "react";
import Hero from '../../../components/Hero';

describe("Hero", () => {

    it("should render the Hero", () => {
        render(<Hero
            title="Title"
            href="https://www.amazon.com.mx/"
            slug="algo" />
        );
    });
})