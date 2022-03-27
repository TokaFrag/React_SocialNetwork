import s from './ProfileInfo.module.css';
<<<<<<< HEAD
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
=======

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
>>>>>>> origin/main
}

export default ProfileInfo;