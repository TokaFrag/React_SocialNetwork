import {v4 as uuidv4} from "uuid";

<<<<<<< HEAD
=======
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
>>>>>>> origin/main
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
<<<<<<< HEAD
	]
=======
	],
	newMessageBody: ''
>>>>>>> origin/main
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
<<<<<<< HEAD
				case SEND_MESSAGE:
			const body = action.newMessageBody;
=======
		case UPDATE_NEW_MESSAGE_BODY:

			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			const body = state.newMessageBody;
>>>>>>> origin/main
			const newMessage = {
				id: uuidv4(), message: body
			};

			return {
				...state,
<<<<<<< HEAD
=======
				newMessageBody: '',
>>>>>>> origin/main
				messages: [...state.messages, newMessage]
			};
		default:
			return state;
	}
}

<<<<<<< HEAD
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
=======
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
	({type: UPDATE_NEW_MESSAGE_BODY, body: body})
>>>>>>> origin/main

export default dialogsReducer;