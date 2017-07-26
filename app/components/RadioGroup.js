const React = require('react');

const Styles = {

  outerStyle: {
    height: 16,
    width: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    display: 'inline-block',
	verticalAlign: 'text-top'
  },

  selected: {
    height: 8,
    width: 8,
    margin: 4,
    background: 'black',
    borderRadius: '50%',
	boxSizing: 'border-box',
  },

  textStyle: {
    display: 'inline-block',
    margin: '5px 10px'
  },

  simpleStyle: {}
}

class RadioGroup extends React.Component {

  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event) {
    const a = event.target.getAttribute('name');
    this.props.onChange(a);
  }

  render() {

    let rows = [];

    const option = this.props.options;

    for (let i in option) {

      const newStyle = (i == this.props.value) ? Styles.selected : Styles.simpleStyle;

      const newOption = ( 
	    <div>
          <div style={ Styles.outerStyle } onClick={this.changeSelect} name={i}>
		    <div style={ newStyle }></div> 
		  </div> 
		  <span style={Styles.textStyle}>{option[i]}</span> 
		</div>
      );
      rows.push(newOption);
    }

    return ( 
	  <div>{rows}</div>
    );
  };
}

module.exports = RadioGroup;