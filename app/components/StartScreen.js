const React = require('react');

class StartScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const newStyle = (!this.props.mainScr) ? 'plus-style' : 'cross-style';
    const symbol = (!this.props.mainScr) ? '+' : '×';
    const outerStyle = (!this.props.mainScr) ? 'outer-style1' : 'outer-style2';

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
                <div className = {outerStyle} onClick = {this.props.onChange}> 
                  <div className = {newStyle}>{symbol}</div>
                </div>
              </div>
            </div>
    );
  };
}

module.exports = StartScreen;