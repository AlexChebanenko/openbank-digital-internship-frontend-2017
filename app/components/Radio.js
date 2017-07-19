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

class Radio extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      style1: Styles.simpleStyle,
      style2: Styles.simpleStyle,
      style2: Styles.simpleStyle,
    };
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event){
    if(event.target.getAttribute('name')=="option1"){
      this.setState({
        style1: Styles.selected,
        style2: Styles.simpleStyle,
        style3: Styles.simpleStyle
      });
    } else if (event.target.getAttribute('name')=="option2") {
      this.setState({
        style1: Styles.simpleStyle,
        style2: Styles.selected,
        style3: Styles.simpleStyle
      });
    } else {
      this.setState({
        style1: Styles.simpleStyle,
        style2: Styles.simpleStyle,
        style3: Styles.selected,
      });
    }
  }
    

	render() {
   
		return (
    <div className = "group">
		  <div>
		  	<div style = {Styles.outerStyle} onClick = {this.changeSelect} name = "option1">
   			  	<div style = {this.state.style1}>
   			  	</div>
  			 </div>
  			 <span style={Styles.textStyle}>Option 1</span>
  	  </div>
      <div>
        <div style = {Styles.outerStyle} onClick = {this.changeSelect} name = "option2">
            <div  style = {this.state.style2}>
            </div>
         </div>
         <span style={Styles.textStyle}>Option 2</span>
      </div>
      <div>
        <div style = {Styles.outerStyle} onClick = {this.changeSelect} name = "option3">
            <div  style = {this.state.style3}>
            </div>
         </div>
         <span style={Styles.textStyle}>Option 3</span>
      </div>
    </div>
		);
    
	};
}

module.exports = Radio