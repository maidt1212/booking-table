import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

describe("BookingForm", () => {
	it("Renders the BookingForm heading", () => {
		render(<BookingForm availableTimes={availableTimes} />);
		const headingElement = screen.getByText("Book Now");
		expect(headingElement).toBeInTheDocument();
	});

	it("Submit button is disabled when form values are invalid", () => {
		render(<BookingForm availableTimes={availableTimes} />);

		const guestsField = screen.getByTestId("guests");
		fireEvent.change(guestsField, { target: { value: "" } });

		const submitBtn = screen.getByTestId("submit-btn");
		expect(submitBtn).toHaveAttribute("disabled");
	});
});
