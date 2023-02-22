import React from "react";
import { VStack, Heading, Text, Link } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const ConfirmedBooking = () => {
	return (
		<VStack spacing={8} pt="48">
			<CheckCircleIcon boxSize={24} />

			<VStack>
				<Heading as="h1">Thank You!</Heading>
				<Text>Your booking is confirmed.</Text>
				<Link as={RLink} to={ROUTES.HOME} textDecoration="underline">
					Back to Home
				</Link>
			</VStack>
		</VStack>
	);
};
