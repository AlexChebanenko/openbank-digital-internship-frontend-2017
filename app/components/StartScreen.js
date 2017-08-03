const React = require('react');

const outerStyle1 = {
    height: 50,
    width: 50,
	  borderColor: 'deepskyblue',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
	  verticalAlign: 'text-top',
	  'margin-left': 50,
  }

const outerStyle2 = {
    height: 50,
    width: 50,
    borderColor: 'gainsboro',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    verticalAlign: 'text-top',
    'margin-left': 50,
  }

const plusStyle = {
    fontSize: 30, 
    'margin-left': 16, 
    'margin-top': 5, 
    color: 'deepskyblue'
}
const crossStyle = {
    fontSize: 30, 
    'margin-left': 16, 
    'margin-top': 5, 
    color: 'gainsboro'
}


class StartScreen extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {

    const newStyle = (!this.props.mainScr) ? plusStyle : crossStyle;
    const symbol = (!this.props.mainScr) ? '+' : '×';
    const outerStyle = (!this.props.mainScr) ? outerStyle1 : outerStyle2;

	  return (
		  <div> 
        <div style = {{display: 'inline-block', 'margin-left': 30}}>
		      <div style = {{fontSize: 20}}>
		        {this.props.json.title}
          </div>
          <div style = {{fontSize: 10, color: 'lawngreen'}}>
            {this.props.json.caption}
          </div>
        </div>
        <div style = {{display: 'inline-block'}}>
		      <div style = {outerStyle} onClick = {this.props.onChange}> 
		          <div style = {newStyle}>{symbol}</div>
		      </div>
        </div>
		  </div>
	  );  
  };
}

module.exports = StartScreen;