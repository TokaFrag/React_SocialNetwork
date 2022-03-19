import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Component} from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return (
			<div>
				<ProfileInfo {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
				<MyPostsContainer/>
			</div>
		)
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match}/>;
}


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
		isAuth:state.auth.isAuth
	}
};

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
	withAuthRedirect)
(ProfileURLMatch)