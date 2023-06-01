import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from ".";

describe("<Card>", () => {
    it("should open component when button was clicked", () => {
        render(<Card />);

        const buttonElement = screen.getByRole("button", { name: "open" });

        expect(buttonElement).toBeVisible();

        expect(screen.queryByRole("main")).not.toBeInTheDocument();

        fireEvent.click(buttonElement);

        const mainElement = screen.getByRole("main");

        expect(mainElement).toBeVisible();
    });
});
