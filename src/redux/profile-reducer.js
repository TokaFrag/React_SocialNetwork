import {v4 as uuidv4} from "uuid";
<<<<<<< HEAD
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
=======

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
>>>>>>> origin/main

const initialState = {
	posts: [
		{id: 1, message: 'Hi!', likesCount: 12},
		{id: 2, message: 'Hello!', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	],
<<<<<<< HEAD
	profile: null,
	status: ''
=======
	newPostText: ''
>>>>>>> origin/main
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: uuidv4(),
<<<<<<< HEAD
				message: action.newPostText,
=======
				message: state.newPostText,
>>>>>>> origin/main
				likesCount: 0
			};
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost]
			}
		}
<<<<<<< HEAD
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
=======

		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
>>>>>>> origin/main
			}
		}
		default:
			return state;
	}
}


<<<<<<< HEAD
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});
	}
}

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data));
			});
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	}
}
=======
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text})

>>>>>>> origin/main
export default profileReducer;