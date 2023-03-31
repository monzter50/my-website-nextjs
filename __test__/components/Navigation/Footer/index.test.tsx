import { render } from '@test/testUtils';
import React from "react";
import Footer from '@components/Navigation/Footer';

describe("Footer", () => {
    it("should render the Footer", () => {
        render(<Footer />);
    });
})