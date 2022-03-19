import s from './ProfileInfo.module.css';
import Spinner from "../../common/Spinner/Spinner";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Spinner/>
	}
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img className={s.userPhoto}
					 src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
				<div>{props.profile.fullName}</div>
				<h3>Обо мне:</h3>
				<div>{props.profile.aboutMe}</div>
				<div>{props.profile.lookingForAJob ? 'Ищу работу.' : 'Не ищу работу.'} {props.profile.lookingForAJobDescription}</div>
			</div>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
		</div>
	)
}

export default ProfileInfo;