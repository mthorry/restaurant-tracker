import React from 'react'

export default class NoteForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			restaurant_id: "",
			user_id: this.props.userId,
			title: "",
			body: ""
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const body = event.target.body.value
		const rest = event.target.rest.value
		this.setState({
			title,
			body
		}, ()=>{this.props.addNote({note: {title, body,	restaurant: rest,	user_id: 1}})})
	}

	render() {
		return(
			<form onSubmit={this.handleChange}>
				<input type="text" name="title" placeholder="Title"/>
				<input type="text" name="body" placeholder="Body"/>
				<input type="submit" value="New Note" />
			</form>
		)
	}
}