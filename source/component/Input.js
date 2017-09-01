import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
		this.getValue = this.getValue.bind(this);
		this.validate = this.validate.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			hasError: nextProps.haveErr
		})
	}

	getValue() {
		console.log('asdf')
		let value = this.input.value;
		if(this.props.require) {
			if(value && this.validate(value)) {
				this.setState({hasError: false})
				return value
			} else {
				this.setState({hasError: true})
				return false
			}
		} else {
			return value
		}
	}

	setValue() {

	}

	reset() {

	}

	validate(value) {
		var template = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(this.props.type = 'email') {
			if(template.test(value))
				return false
		}
	}

	render() {
		console.log('render input')
		let classBlock = '_blockInput'
		let contentErr = 'please fill input'

		if(this.state.hasError) {
			classBlock = '_blockInput errors'
		} else {
			classBlock = '_blockInput'
		}

		return(
			<div className={classBlock}>
				<input
					ref = {node => this.input = node}
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
				<p className='_errNotify'>
					{contentErr}
				</p>
			</div>
		)
	}
}

Input.defaultProps = {
	display: true,
	haveErr: false,
	require: false,
	type: 'text',
}

Input.propTypes = {
	haveErr: React.PropTypes.boolean
}

module.exports = Input