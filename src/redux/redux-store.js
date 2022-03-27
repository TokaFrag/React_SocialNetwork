<<<<<<< HEAD
import {applyMiddleware, combineReducers, createStore} from "redux";
=======
import {combineReducers, createStore} from "redux";
>>>>>>> origin/main
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
<<<<<<< HEAD
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
=======
>>>>>>> origin/main

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
<<<<<<< HEAD
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app:appReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
=======
	usersPage: usersReducer
});

const store = createStore(reducers);
>>>>>>> origin/main

export default store;