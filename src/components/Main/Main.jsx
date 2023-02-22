import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { availableTimesReducer } from "../../reducers/availableTimesReducer";
import { submitAPI } from "../../utils/api";
import { BookingForm } from "../BookingForm";
import { ROUTES } from "../../constants/routes";
import { VStack } from "@chakra-ui/react";

export const Main = () => {
	const [availableTimes, dispatchAvailableTimes] = useReducer(
		availableTimesReducer,
		[]
	);
	const navigate = useNavigate();

	const initializeTimes = () => {
		dispatchAvailableTimes({
			type: "initialize",
		});
	};

	const updateTimes = (date) => {
		dispatchAvailableTimes({
			type: "update",
			date,
		});
	};

	const submitForm = (formData) => {
		const isSuccess = submitAPI(formData);

		if (isSuccess) {
			navigate(ROUTES.CONFIRMED);
		}
	};

	useEffect(() => {
		initializeTimes();
	}, []);

	return (
		<VStack
			as="main"
			spacing="12%"
			marginX="auto"
			maxWidth={800}
			p={4}
			justifyContent="center"
			alignItems="center"
		>
			<div className="curve-background" />
			<BookingForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}
				submitForm={submitForm}
			/>
		</VStack>
	);
};
