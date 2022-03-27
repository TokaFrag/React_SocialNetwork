import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
<<<<<<< HEAD
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLengthCreator100 = maxLengthCreator(100)
=======
>>>>>>> origin/main

const Dialogs = (props) => {

	const state = props.dialogsPage;

	const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
<<<<<<< HEAD

	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	const AddMessageForm = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						component={TextArea}
						name={'newMessageBody'}
						placeholder='Enter your message'
						validate={[requiredField, maxLengthCreator100]}
					/>
				</div>
				<div>
					<button>Send</button>
				</div>
			</form>
		)
	}

	const AddMessageReduxForm = reduxForm({
		form: 'postAddMessageForm'
	})(AddMessageForm)

=======
	const newMessageBody = state.newMessageBody;

	const onSendMessageClick = () => {
		props.sendMessage();
	}

	const onNewMessageChange = (e) => {
		const body = e.target.value;
		props.updateNewMessageBody(body);
	}

>>>>>>> origin/main
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
<<<<<<< HEAD
				<AddMessageReduxForm onSubmit={addNewMessage}/>
=======
				<div>
					<div><textarea value={newMessageBody}
								   onChange={onNewMessageChange}
								   placeholder='Enter your message'></textarea></div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
>>>>>>> origin/main
			</div>
		</div>
	)
}

export default Dialogs;