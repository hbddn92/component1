import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
			value: this.props.initialValue
		}
		this.getValue 		= this.getValue.bind(this);
		this.handleChange   = this.handleChange.bind(this);
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
			if(value) {
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

	setValue(vl) {
		this.setState({
			value: vl
		})
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	reset() {

	}

	render() {
		console.log('render input')
		let classBlock = '_blockInput'
		let contentErr = this.props.textErr

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
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<p className='_errNotify'>
					{contentErr}
				</p>
			</div>
		)
	}
}

Input.defaultProps = {
	haveErr: false,
	textErr: 'Field is require',
	display: true,
	require: false,
	type: 'text',
	initialValue: '',

}

Input.propTypes = {
	haveErr: React.PropTypes.boolean
}

module.exports = Input