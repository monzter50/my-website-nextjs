import { render, screen } from '../../testUtils';
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

    it("should render the content correct",async ()  => {
        render(<Hero
            title="Title"
            href="https://www.amazon.com.mx/"
            slug="algo" />
        );
        expect(await screen.findByText(/algo/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /algo/i })).toHaveAttribute('href','https://www.amazon.com.mx/');
    });
})