import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {minLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

import styles from './Login.module.css';

const minLengthCreator2 = minLengthCreator(2)

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name={'email'}
					placeholder={'Login'}
					validate={[requiredField, minLengthCreator2]}
					component={Input}/>
			</div>
			<div>
				<Field
					name={'password'}
					placeholder={'Password'}
					type={'password'}
					validate={[requiredField]}
					component={Input}/>

			</div>
			<div>
				<Field
					name={'rememberMe'}
					component={Input}
					type="checkbox"/>remember me
			</div>
			{props.error && <div className={styles.form_summary_error}>
				{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Navigate replace to={'/profile'}/>
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
	login,
	logout
})(Login);