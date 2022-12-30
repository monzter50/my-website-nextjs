import { render } from '../../../../testUtils';
import React from "react";
import CardBlog from '../../../../../components/Surfaces/Cards/CardBlog';

const cardObj = {
    title: "Nuevo Post",
    author: { name: "Author " },
    excerpt: "Esto si es un postx",
    slug: "post",
}
describe("Layout", () => {

    it("should render the Layout", () => {
        render(
            <CardBlog 
                title={cardObj?.title} 
                author={cardObj.author}
                excerpt={cardObj?.excerpt}
                slug={cardObj?.slug}
            />
        );
    });
})