import {v4 as uuidv4} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
	dialogs: [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrew'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Viktor'},
		{id: 6, name: 'Valera'}
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How is your?'},
		{id: 3, message: 'Yo'},
		{id: 4, message: 'Yo'},
		{id: 5, message: 'Yo'}
	]
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
				case SEND_MESSAGE:
			const body = action.newMessageBody;
			const newMessage = {
				id: uuidv4(), message: body
			};

			return {
				...state,
				messages: [...state.messages, newMessage]
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;