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
			<div>
				<div className={style.current_page__items}>
					{pages.map(page => {
						return <span
							key={page}
							className={this.props.currentPage === page ? style.selected_page : null}
							onClick={() => {
								this.onPageChanged(page)
							}}>{page}</span>
					})}

				</div>
				<div>
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

	}
}

export default Users;