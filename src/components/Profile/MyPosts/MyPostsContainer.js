<<<<<<< HEAD
import {addPostActionCreator} from "../../../redux/profile-reducer";
=======
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
>>>>>>> origin/main
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
<<<<<<< HEAD
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
=======
		updateNewPostText: (text) => {
			const action = updateNewPostTextActionCreator(text);
			dispatch(action);
		}, addPost: () => {
			dispatch(addPostActionCreator());
>>>>>>> origin/main
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;