import { fetchAPI } from "../utils/api";

export const availableTimesReducer = (_, action) => {
	switch (action.type) {
		case "initialize": {
			// const times = window.fetchAPI(new Date());
			// console.log("🚀 ~ file: Main.jsx:10 ~ initializeTimes ~ times:", times);
			const availableTimes = fetchAPI(new Date());
			return availableTimes;
		}
		case "update": {
			if (!action.date) {
				return [];
			}

			const availableTimes = fetchAPI(action.date);
			return availableTimes;
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
};
