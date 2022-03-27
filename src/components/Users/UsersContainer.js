<<<<<<< HEAD
import {connect} from 'react-redux';
import {Component} from 'react';
import Users from "./Users";
import {
	follow,
	getUsers,
	setCurrentPage,
	subscribe,
	toggleFollowingProgress,
	unfollow,
	unsubscribe
} from '../../redux/users-reducer';
import Spinner from "../common/Spinner/Spinner";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getAllUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsAuth,
	getIsFetching,
	getPageSize,
	getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Spinner/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				   pageSize={this.props.pageSize}
				   currentPage={this.props.currentPage}
				   onPageChanged={this.onPageChanged}
				   users={this.props.users}
				   follow={this.props.follow}
				   unfollow={this.props.unfollow}
				   isFetching={this.isFetching}
				   toggleFollowingProgress={this.props.toggleFollowingProgress}
				   followingInProgress={this.props.followingInProgress}
				   subscribe={this.props.subscribe}
				   unsubscribe={this.props.unsubscribe}

			/>
		</>
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 		isAuth: state.auth.isAuth
// 	}
// }

const mapStateToProps = (state) => {
	return {
		users: getAllUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state)
	}
}


export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers,
		subscribe,
		unsubscribe
	}),
	withAuthRedirect
)
(UsersContainer)
=======
import {connect} from "react-redux";
import {
	followAC,
	setCurrentPage,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount:(totalUsersCount)=>{
			dispatch(setTotalUsersCountAC(totalUsersCount))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default DialogsContainer;
>>>>>>> origin/main
