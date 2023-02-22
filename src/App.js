import "./App.css";
import { Link as RLink, Route, Routes } from "react-router-dom";
import { BookingPage } from "./pages/BookingPage";
import { ROUTES } from "./constants/routes";
import { ConfirmedBooking } from "./components/ConfirmedBooking";
import { HStack, Link } from "@chakra-ui/react";
import { HomePage } from "./pages/HomePage";
import logo from "./images/logo.png";

function App() {
	return (
		<div className="container">
			<div className="curve-background" />

			<nav>
				<HStack maxWidth={800} px={4} mx="auto" justifyContent="center">
					<RLink to={ROUTES.HOME}>
						<img src={logo} alt="header-logo" className="header-logo" />
					</RLink>

					<Link as={RLink} to={ROUTES.HOME} className="nav-item">
						Home
					</Link>

					<Link as={RLink} to={ROUTES.BOOKING} className="nav-item">
						Book
					</Link>
				</HStack>
			</nav>

			<Routes>
				<Route path={ROUTES.BOOKING} element={<BookingPage />}></Route>
				<Route
					path={ROUTES.CONFIRMED}
					element={<ConfirmedBooking />}
				></Route>
				<Route path={ROUTES.HOME} element={<HomePage />}></Route>
			</Routes>

			<footer className="footer">
				<hr />
				<p>Copyright Little Lemon</p>
			</footer>
		</div>
	);
}

export default App;
