var React = require('react');
var RadioGroup = require('./RadioGroup');

var option = {
  espresso: 'Espresso',
  americano: 'Americano',
  latte: 'Latte',
  cappuccino: 'Capuccino',
  mocha: 'Mocha',
  'flat-white': 'Flat white',
  tea: 'Black tea'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'no value'
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(newValue){
    this.setState({
      value: newValue
    });
  }
    

	render() {
   
		return (
        <RadioGroup value = {this.state.value} onChange = {this.changeValue} options = {option} />
		);
    
	};
}

module.exports = App