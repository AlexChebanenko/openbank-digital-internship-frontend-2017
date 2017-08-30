import React from 'react';

class StartScreen extends React.Component {

  render() {

    const newStyle = this.props.mainScr ? 'cross-style' : 'plus-style';
    const outerStyle = this.props.mainScr ? 'grey-outer-style' : 'blue-outer-style';

    return (
            <div className="start-screen">
              <div>
                <div className="title-style">
                  {this.props.json.title}
                </div>
                <div>&nbsp;</div>
                <div className="caption-style">
                  {this.props.json.caption}
                </div>
              </div>
              <div>
                <div className={outerStyle} onClick={this.props.addMainScreen}>
                  <div className={newStyle}>+</div>
                </div>
              </div>
            </div>
    );
  };
}

export default StartScreen;
