import Dropdown from './Dropdown';
import Search from './Search';
import Input from './InputSet';
import Checkbox from './Checkbox';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			example: false,
			initialValue: 'hell'
		}
	}

	click() {
		var self = this;
		console.log(this.input.getValue());
		console.log(this.input2.getValue());
		setTimeout(function(){ 
			self.setState({
				example: true,
			})

		}, 3000);
		this.input.setValue('hell changed')
	}

	render() {
		return(
		<div>
			<h2>Dropdown</h2>
			<Dropdown/>
			<h2>Search</h2>
			<Search/>
			<h2>Input</h2>
			<Input
				type='text'
				require={true}
				haveErr={this.state.example}
				textErr='field is require'
				initialValue={this.state.initialValue}
				ref={node => this.input = node}
			/>
			<Input
				type='number'
				haveErr={this.state.example}
				ref={node => this.input2 = node}
			/>
			<Checkbox />
			<span onClick={this.click.bind(this)}>Click</span>
		</div>
		)
	}
}

ReactDOM.render(
   	<App />,
    document.querySelector('.root')
);