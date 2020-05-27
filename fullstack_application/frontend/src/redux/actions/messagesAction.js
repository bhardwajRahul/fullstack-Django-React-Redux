import { CREATE_MESSAGE } from "./types";

//create message
export const createMessage = (msg) => {
	return {
		//passes payload to the reducer, i.e messageReducer handles the case of CREATE_MESSAGE here
		type: CREATE_MESSAGE,
		payload: msg,
	};
};
