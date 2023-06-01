import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from ".";

describe("<Button>", () => {
    it("should render button", () => {
        const { getByText, getByRole } = render(<Button>Button</Button>);

        expect(getByRole("button")).toBeInTheDocument();
        expect(getByText("Button")).toBeInTheDocument();
    });

    it(`should render 'Carregando...' text when isLoading was passed`, () => {
        const { getByText } = render(<Button isLoading>Button</Button>);
        const isLoadingText = getByText("Carregando...");

        expect(isLoadingText).toBeInTheDocument();
    });

    it("should render the button with background color green by default", () => {
        const { getByRole } = render(<Button>Button</Button>);
        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveStyle({
            backgroundColor: "green",
        });
    });

    it("should render the button with background color red when background color was passed", () => {
        const { getByRole } = render(<Button color="red">Button</Button>);
        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveStyle({
            backgroundColor: "red",
        });
    });
});
