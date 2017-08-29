import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var subList = this.props.subList.map((text, index) =>
			<li key={index}>
				{text}
			</li>
		)
		return(
			<div className='_dropdown'>
				<div className='_topDropdown'>
					<button type='button' className='_dropdownToggle'>{this.props.title}</button>
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
