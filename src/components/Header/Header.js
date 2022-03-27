import s from './Header.module.css';
<<<<<<< HEAD
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return <header className={s.header}>
		<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
		<div className={s.loginBlock}>
			{props.isAuth
				? <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}

		</div>
=======

const Header = () => {
	return <header className={s.header}>
		<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
>>>>>>> origin/main
	</header>
}

export default Header;