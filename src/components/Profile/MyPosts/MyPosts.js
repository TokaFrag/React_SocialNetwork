import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
<<<<<<< HEAD
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
=======
>>>>>>> origin/main

const MyPosts = (props) => {
	const postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

<<<<<<< HEAD
	const onAddPost = (values) => {
		props.addPost(values.newPostText);
=======
	const newPostElement = React.createRef();

	const onAddPost = () => {
		props.addPost();
	}

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.updateNewPostText(text);
>>>>>>> origin/main
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
<<<<<<< HEAD
			<AddNewPostReduxForm onSubmit={onAddPost}/>
			<div>
				{postsElements}
			</div>

=======
			<div>
				<div>
                    <textarea onChange={onPostChange}
							  ref={newPostElement}
							  placeholder='Enter your message'
							  value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
>>>>>>> origin/main
		</div>
	)
}

export default MyPosts;