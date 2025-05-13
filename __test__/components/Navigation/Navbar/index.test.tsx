import React from "react";

import { render } from "@test/testUtils";
import Navbar from "@components/Navigation/Navbar";

describe("Navbar", () => {
    it("should render the Navbar", () => {
        render(<Navbar />);
    });
});