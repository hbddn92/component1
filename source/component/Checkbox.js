import React from 'react'

class Checkbox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}

	handleChange(event) {
		let target = event.target;
		this.setState({
			checked: target.checked
		})
	}

	render() {
		return(
			<input type='checkbox' checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
		)
	}
}

module.exports = Checkbox