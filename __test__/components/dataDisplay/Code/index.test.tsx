import React from "react";

import { render } from "@test/testUtils";
import Code from "@components/dataDisplay/Code";

describe("Code", () => {

    it("should render the code", () => {
        render(<Code>Codigo</Code>);
    });
});