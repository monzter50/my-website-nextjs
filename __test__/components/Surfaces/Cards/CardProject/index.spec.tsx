import { render } from '../../../../testUtils';
import React from "react";
import CardProject from '../../../../../components/Surfaces/Cards/CardProject';

const cardObj = {
    title: "Nuevo Post",
    author: { name: "Author " },
    excerpt: "Esto si es un postx",
    slug: "post",
}
describe("CardProject", () => {

    it("should render the CardProject", () => {
        render(
            <CardProject title='LearnAla' src='' href=''/>
        );
    });
})