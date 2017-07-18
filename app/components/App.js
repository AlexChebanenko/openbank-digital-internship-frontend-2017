var React = require('react');

class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			selectedOption : 'option1'
		};
		this.changeSelect = this.changeSelect.bind(this);
	}

	changeSelect(e){
		this.setState({
			selectedOption : e.target.value
		});
	}

	render() {
		return (
		<div className = 'container'>	
		  <div className = 'radio'> 
		  	<input type = 'radio'
		  	       value = 'option1'
		  	       checked ={this.state.selectedOption == 'option1'} 
		  	       onChange = {this.changeSelect}>
		  	</input>
		  	Option 1
		  </div>
		  <div className = 'radio'> 
		  	<input type = 'radio' 
		  	       value = 'option2' 
		  	       onChange = {this.changeSelect}
		  	       checked={this.state.selectedOption == 'option2'}>
		  	</input>
		  	Option 2
		  </div>
		  <div className = 'radio'> 
		  	<input type = 'radio' 
		  	       value = 'option3' 
		  	       onChange = {this.changeSelect}
		  	       checked={this.state.selectedOption === 'option3'}>
		  	</input>
		  	Option 3
		  </div>
		</div>
		);
	};
}

module.exports = App;