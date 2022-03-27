<<<<<<< HEAD
import {usersAPI} from "../api/api";

=======
>>>>>>> origin/main
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
<<<<<<< HEAD
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
=======
>>>>>>> origin/main

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
<<<<<<< HEAD
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
=======
	currentPage: 1
>>>>>>> origin/main
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: true}
					}
					return user;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: false}
					}
					return user;
				})
			};
		case SET_USERS:
			return {...state, users: [...action.users]}
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case SET_TOTAL_USERS_COUNT:
			return {...state, totalUsersCount: action.totalUsersCount}
<<<<<<< HEAD
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
=======
>>>>>>> origin/main
		default:
			return state;
	}
}

<<<<<<< HEAD
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
});

export const getUsers = (page, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(page, pageSize)
			.then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));

			});
	}
}

export const subscribe = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.followUser(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(follow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			});
	}
}

export const unsubscribe = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.unfollowUser(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(unfollow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			});
	}
}
=======
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
>>>>>>> origin/main

export default usersReducer;