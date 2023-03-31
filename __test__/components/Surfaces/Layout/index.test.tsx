import { render } from '@test/testUtils';
import React from "react";
import Layout from '@components/Surfaces/Layout';

describe("Layout", () => {

  it("should render the Layout", () => {
    render(
      <Layout>
        <div>Layout</div>
      </Layout>);
  });
})