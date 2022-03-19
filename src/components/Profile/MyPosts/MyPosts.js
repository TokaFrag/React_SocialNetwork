import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControl";

const maxLengthCreator30 = maxLengthCreator(30)

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name={'newPostText'}
					component={TextArea}
					placeholder={'Enter your message'}
					validate={[requiredField, maxLengthCreator30]}
				/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostReduxForm = reduxForm({
	form: 'profileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = (props) => {
	const postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

	const onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostReduxForm onSubmit={onAddPost}/>
			<div>
				{postsElements}
			</div>

		</div>
	)
}

export default MyPosts;