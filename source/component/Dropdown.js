import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
		}
		this.hideMenu = this.hideMenu.bind(this)
	}

	showMenu() {
		this.setState({menuOpen: true})
		document.addEventListener("click", this.hideMenu);
	}

	chooseMenu(value) {
		console.log(value)
	}

	hideMenu() {
		console.log('outside dropmenu');
		this.setState({menuOpen: false})
		document.removeEventListener("click", this.hideMenu);
	}

	render() {
		console.log('render')
		var subList = this.props.subList.map((text, index) =>
			<li key={index} onClick={this.chooseMenu.bind(this, text)}>
				<a href='https://stackoverflow.com/questions/32553158/detect-click-outside-react-component'>{text}</a>
			</li>
		)
		return(
			<div className={ this.state.menuOpen ? '_dropdown _dropdownOpen' : '_dropdown _dropdownClose'}>
				<div className='_topDropdown'>
					<button type='button' className='_dropdownToggle' onClick={this.showMenu.bind(this)}>{this.props.title}</button>
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
