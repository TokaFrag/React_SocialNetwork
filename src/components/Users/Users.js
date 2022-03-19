import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
		if (i === 20) break;
	}

	return (
		<div className={style.current_page}>
			<div>
				<div className={style.current_page__items}>
					{pages.map(page => {
						return <span
							key={page}
							className={props.currentPage === page ? style.selected_page : null}
							onClick={() => {
								props.onPageChanged(page)
							}}>{page}</span>
					})}

				</div>
				<div>
					{props.users.map(user => <div className={style.users_item}
												  key={user.id}>
					<span>
					<div>
					<NavLink to={`/profile/${user.id}`}>
						<img className={style.usersPhoto_img}
							 src={user.photos.small ? user.photos.small : userPhoto}
							 alt={`Photo ${user.name}`}/>
					</NavLink>
					</div>
					<div>
				{user.followed ?
					<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
						props.unsubscribe(user.id)
					}}>Unfollow</button> :
					<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
						props.subscribe(user.id)
					}}>Follow</button>}

					</div>
					</span>
						<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
					</span>
						<span>
					<div>{'user.location.country'}</div>
					<div>{'user.location.city'}</div>
					</span>
					</div>)}
				</div>

			</div>

		</div>

	)
}

export default Users;
