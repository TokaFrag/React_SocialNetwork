import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import Login from "../Login/Login";
import Navbar from '../Navbar/Navbar';
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import {initializeApp} from "../../redux/app-reducer";

import './App.css';
import Spinner from "../common/Spinner/Spinner";


class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Spinner/>
		}
		return (
			<Router>
				<div className='app-wrapper'>
					<HeaderContainer/>
					<Navbar/>
					<div className='app-wrapper-content'>
						<Routes>
							<Route path='/dialogs/*' element={<DialogsContainer/>}/>
							<Route path='/*' element={<ProfileContainer/>}/>
							<Route path='/users' element={<UsersContainer/>}/>
							<Route path='/login' element={<Login/>}/>
						</Routes>
					</div>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, {initializeApp})(App));