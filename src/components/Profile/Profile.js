import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

<<<<<<< HEAD

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
=======
const Profile = () => {
	return (
		<div>
			<ProfileInfo/>
>>>>>>> origin/main
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;