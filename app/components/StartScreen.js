const React = require('react');

class StartScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const newStyle = this.props.mainScr ? 'cross-style' : 'plus-style';
    const symbol = this.props.mainScr ? '×' : '+';
    const outerStyle = this.props.mainScr ? 'grey-outer-style' : 'blue-outer-style';

    return (
            <div className = "start-screen"> 
              <div>
                <div className = "title-style">
                  {this.props.json.title}
                </div>
                <div>&nbsp;</div>
                <div className = "caption-style">
                  {this.props.json.caption}
                </div>
              </div>
              <div>
                <div className = {outerStyle} onClick = {this.props.onChange}> 
                  <div className = {newStyle}>{symbol}</div>
                </div>
              </div>
            </div>
    );
  };
}

module.exports = StartScreen;