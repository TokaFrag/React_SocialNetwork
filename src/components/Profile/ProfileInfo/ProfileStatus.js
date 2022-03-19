import {Component} from "react";

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange}
							   placeholder={'Ваш статус'}
							   autoFocus={true} onBlur={this.deactivateEditMode}
							   type="text"
							   defaultValue={this.state.status}/>
					</div>
				}
			</div>
		)
	}

}

export default ProfileStatus;