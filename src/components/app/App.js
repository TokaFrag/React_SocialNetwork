import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

import './App.css';



const App = () => {
	return (
		<Router>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/dialogs/*' element={<DialogsContainer/>}/>
						<Route path='/*' element={<Profile/>}/>
						<Route path='/users' element={<UsersContainer/>}/>
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App;