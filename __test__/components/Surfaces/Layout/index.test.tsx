import React from "react";

import { render } from "@test/testUtils";
import Layout from "@components/Surfaces/Layout";

describe("Layout", () => {

    it("should render the Layout", () => {
        render(
            <Layout>
                <div>Layout</div>
            </Layout>);
    });
});