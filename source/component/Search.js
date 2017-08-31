import React from 'react'
import _ from 'lodash'

var listMenu = [1,2,3,4,5,1,2,3,4,5]


class SearchMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	chooseValue(value) {
		console.log(value)
	}

	render() {
		console.log('render1')
		var listMenu = this.props.listMenu.map((content, index) => 
			<li key={index} onMouseDown={this.chooseValue.bind(this, content)}>
				{content}
			</li>
		) 
		return(
			<ul>
				{listMenu}
			</ul>
		)
	}
};


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			menu: listMenu
		}
		this.closeMenu = this.closeMenu.bind(this)
		this.openMenu = this.openMenu.bind(this)
		this.search = this.search.bind(this)
	}

	openMenu() {
		console.log('open')
		this.setState({isOpen: true});
	}

	closeMenu() {
		console.log('close')
		this.setState({isOpen: false})
	}

	search() {
		var value = this.input.value;
		if(value) {
			var elements = _.filter(listMenu, function(element){
				return element == value
			})
			this.setState({menu: elements})
		} else {
			this.setState({menu: listMenu})
		}
	}

	render() {
		console.log('render')
		return(
			<div className={(this.state.isOpen ? '_search _searchOpen' : '_search _searchClose')}>
				<input 
					type='text' 
					ref={node => {this.input = node}} 
					onFocus={this.openMenu} 
					onBlur={this.closeMenu} 
					onChange={this.search}
					placeholder='Search'
				/>
				<div className='_searchMenu'>
					<div className='ex'>
						<SearchMenu listMenu={this.state.menu} />
					</div>
				</div>
			</div>
		)
	}
};


SearchMenu.propTypes = {
	listMenu: React.PropTypes.array
}

SearchMenu.defaultProps = {
	listMenu: listMenu
}

module.exports = Search