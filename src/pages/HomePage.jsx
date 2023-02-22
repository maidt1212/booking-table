import React from "react";
import "../styles/homepage.css";
import { SimpleGrid } from "@chakra-ui/react";
import { PromotionCard } from "../components/PromotionCard/PromotionCard";
import { ROUTES } from "../constants/routes";

export const HomePage = () => {
	return (
		<main>
			<section className="banner">
				<img src="./assets/noodles.jpeg" alt="noodle" />
				<div className="banner__content">
					<p className="banner__title">30% Off This Week</p>
					<p className="banner__desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Temporibus nemo quae inventore, eos blanditiis tempora ullam
						reiciendis quia in nostrum minus exercitationem dolorem
						architecto libero tenetur sapiente, eaque corporis
						consectetur!
					</p>
				</div>
			</section>

			<SimpleGrid as="section" columns={{ sm: 1, md: 3 }} spacing={4}>
				<PromotionCard heading="Our New Menu" linkText="See our new menu" />
				<PromotionCard
					heading="Book a table"
					link={ROUTES.BOOKING}
					linkText="See our new menu"
				/>
				<PromotionCard
					heading="Opening Hours"
					linkText="See our new menu"
				/>
			</SimpleGrid>
		</main>
	);
};
