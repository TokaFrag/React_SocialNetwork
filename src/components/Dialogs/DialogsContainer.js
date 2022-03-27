import React from 'react';
<<<<<<< HEAD
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
=======
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
>>>>>>> origin/main
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
<<<<<<< HEAD
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
=======
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
>>>>>>> origin/main
		}
	}
}

<<<<<<< HEAD
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect)
(Dialogs)
=======
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
>>>>>>> origin/main
