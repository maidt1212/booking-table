import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../Main/Main";

describe("Main", () => {
	it("Render Main correctly", () => {
		render(
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		);

		expect(screen).toMatchSnapshot();
	});

	it("initializeTimes returns correct value", () => {
		render(
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		);

		const timeSelect = screen.getByTestId("time-select");

		expect(timeSelect.hasChildNodes()).toBeTruthy();
	});

	it("updateTimes returns correct value", () => {
		render(
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		);

		const timeSelect = screen.getByTestId("time-select");

		fireEvent.change(timeSelect, { target: { value: "2022-02-26" } });

		expect(timeSelect.hasChildNodes()).toBeTruthy();
	});
});
