import { render } from '@test/testUtils';
import React from "react";
import Navbar from '@components/Navigation/Navbar';

describe("Navbar", () => {
    it("should render the Navbar", () => {
        render(<Navbar />);
    });
})