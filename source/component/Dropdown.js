import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
		}
	}

	toggleClickMenu() {
		(this.state.menuOpen ? this.setState({menuOpen: false}) : this.setState({menuOpen: true}))
	}

	// componentDidUpdate(prevProps, prevState) {
	// 		console.log(prevState.menuOpen)
	// 	if(prevState.menuOpen) {
	// 		document.addEventListener('click', this.setState({menuOpen: false}))
	// 		console.log('have')
	// 	} else {
	// 		document.removeEventListener('click', true)
	// 	}

	// }

	chooseMenu(value) {
		this.setState({menuOpen: false})
		console.log(value)
	}

	closeDropMenu(e) {
		console.log('outside dropmenu');
		e.preventDefault()
		this.setState({menuOpen: false})
	}

	render() {
		var subList = this.props.subList.map((text, index) =>
			<li key={index} onClick={this.chooseMenu.bind(this, text)}>
				<a href='https://stackoverflow.com/questions/32553158/detect-click-outside-react-component'>{text}</a>
			</li>
		)
		return(
			<div className={ this.state.menuOpen ? '_dropdown _dropdownOpen' : '_dropdown _dropdownClose'} onBlur={this.closeDropMenu.bind(this)}>
				<div className='_topDropdown'>
					<button type='button' className='_dropdownToggle' onClick={this.toggleClickMenu.bind(this)}>{this.props.title}</button>
					<span>v</span>
				</div>
				<ul className='_dropdown-menu'>
					{subList}
				</ul>
			</div>
		)
	}
}

Dropdown.propTypes = {
	subList: React.PropTypes.array
}

Dropdown.defaultProps = {
	title: 'Dropdown',
	subList: [1,2,3]
}

module.exports = Dropdown
