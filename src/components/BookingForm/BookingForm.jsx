import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			date: format(new Date(), "yyyy-MM-dd"),
			time: availableTimes[0],
			noGuests: 1,
			occasion: "Birthday",
		},
		onSubmit: (values) => {
			submitForm(values);
		},
		validationSchema: Yup.object({
			date: Yup.string().required("Required"),
			noGuests: Yup.number()
				.moreThan(0, "Number of guests must be larger than 1")
				.lessThan(10, "Number of guests must be less than 10")
				.required("Required"),
		}),
	});

	const handleDateChange = (event) => {
		formik.handleChange(event);

		const newDate = new Date(event.target.value);
		updateTimes(newDate);
	};

	return (
		<form className="booking-form" onSubmit={formik.handleSubmit}>
			<Heading as="h1">Book Now</Heading>

			<FormControl isInvalid={formik.touched.date && formik.errors.date}>
				<FormLabel htmlFor="res-date">Choose date</FormLabel>
				<Input
					type="date"
					id="res-date"
					name="res-date"
					value={formik.values.date}
					onChange={handleDateChange}
				/>
				<FormErrorMessage>{formik.errors.date}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={formik.touched.time && formik.errors.time}>
				<FormLabel htmlFor="res-time">Choose time</FormLabel>
				<Select
					id="res-time"
					data-testid="time-select"
					name="res-time"
					value={formik.values.time}
					{...formik.getFieldProps("time")}
				>
					{availableTimes.map((time) => (
						<option key={time} value={time}>
							{time}
						</option>
					))}
				</Select>
			</FormControl>

			<FormControl
				isInvalid={formik.touched.noGuests && formik.errors.noGuests}
			>
				<FormLabel htmlFor="guests">Number of guests</FormLabel>
				<Input
					data-testid="guests"
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					name="guests"
					value={formik.values.noGuests}
					{...formik.getFieldProps("noGuests")}
				/>
				<FormErrorMessage>{formik.errors.noGuests}</FormErrorMessage>
			</FormControl>

			<FormControl
				isInvalid={formik.touched.occasion && formik.errors.occasion}
			>
				<FormLabel htmlFor="occasion">Occasion</FormLabel>
				<Select
					id="occasion"
					name="occasion"
					value={formik.values.occasion}
					{...formik.getFieldProps("occasion")}
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</Select>
			</FormControl>

			<Button
				data-testid="submit-btn"
				type="submit"
				colorScheme="yellow"
				isLoading={formik.isValidating}
				isDisabled={!formik.isValid}
			>
				Make Your Reservation
			</Button>
		</form>
	);
};
