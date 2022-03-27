<<<<<<< HEAD
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
=======
import {Component} from "react";
import style from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);

			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		const pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
			if (i === 20) break;
		}
		;

		return <div className={style.current_page}>
>>>>>>> origin/main
			<div>
				<div className={style.current_page__items}>
					{pages.map(page => {
						return <span
							key={page}
<<<<<<< HEAD
							className={props.currentPage === page ? style.selected_page : null}
							onClick={() => {
								props.onPageChanged(page)
=======
							className={this.props.currentPage === page ? style.selected_page : null}
							onClick={() => {
								this.onPageChanged(page)
>>>>>>> origin/main
							}}>{page}</span>
					})}

				</div>
				<div>
<<<<<<< HEAD
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
=======
					{this.props.users.map(user => <div className={style.users_item}
													   key={user.id}>
					<span>
					<div>
					<img className={style.usersPhoto_img}
						 src={user.photos.small ? user.photos.small : userPhoto}
						 alt={`Photo ${user.name}`}/>
					</div>
					<div>
				{user.followed ? <button onClick={() => {
					this.props.unfollow(user.id)
				}}>Unfollow</button> : <button onClick={() => {
					this.props.follow(user.id)
				}}>Follow</button>}
>>>>>>> origin/main

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

<<<<<<< HEAD
	)
}

export default Users;
=======
	}
}

export default Users;
>>>>>>> origin/main
