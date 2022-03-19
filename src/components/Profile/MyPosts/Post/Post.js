import s from './Post.module.css';
import myPhoto from '../../../../assets/images/man.png'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src={myPhoto}/>
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post;