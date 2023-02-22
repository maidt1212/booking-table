import React from "react";
import { VStack, Heading, Link } from "@chakra-ui/react";
import photo from "../../images/photo.jpg";

export const PromotionCard = ({ heading, link = "/", linkText }) => {
	return (
		<VStack className="card" alignItems="flex-start">
			<Heading as="h2" fontSize="xl">
				{heading}
			</Heading>

			<div className="card__img">
				<img src={photo} alt="banner" />
			</div>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
				delectus qui! Neque odio facere impedit reiciendis veniam assumenda
				nihil consequuntur blanditiis temporibus. Id aspernatur quibusdam
				ducimus explicabo laborum aut.
			</p>

			{linkText ? (
				<Link
					display="inline-block"
					textDecoration="underline"
					mt={2}
					href={link}
				>
					{linkText}
				</Link>
			) : null}
		</VStack>
	);
};
