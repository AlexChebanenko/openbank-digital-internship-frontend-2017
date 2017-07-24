var React = require('react');

const Styles = {

  outerStyle : {
  height: 15,
  width: 15,
  borderColor:'black',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 50,
  display : 'inline-block'

  },

  selected : {
  height: 8,
  width: 8,
  padding: 0,
  margin: 2.5,
  color: 'red',
  background: 'black',
  borderColor:'black',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 50

  },

  textStyle : {
  display : 'inline-block',
  margin: 10
  },

  simpleStyle : {

  }
}

class RadioGroup extends React.Component {

  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event){
    const a = event.target.getAttribute('name');
    this.props.onChange(a);
  }
    

	render() {

    var rows = [];

    var option = this.props.options;

    for (var i in option) {

       var newStyle = (i == this.props.value) ? Styles.selected : Styles.simpleStyle;
       
       var newOption = ( 
        <div>
          <div style = {Styles.outerStyle} onClick = {this.changeSelect} name = {i}>
              <div style = {newStyle}>
              </div>
          </div>
          <span style = {Styles.textStyle}>{option[i]}</span>
        </div>
       );
       rows.push(newOption);

    }
    
  	return (
      <div>
		    {rows}
      </div>
	  );
    
	};
}

module.exports = RadioGroup