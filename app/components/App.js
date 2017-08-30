import React from 'react';
import StartScreen from './StartScreen';
import MainScreenContainer from '../containers/MainScreenContainer';
import FinalScreen from './FinalScreen';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.moneyBox.finalScr) {
      return (
        <FinalScreen
          isDone={this.props.moneyBoxFinished}
          amount={this.props.moneyBox.amount}
        />
      );
    }

    return (
      <div className = "app-style">
        <StartScreen
          json = {this.props.moneyBox.data}
          addMainScreen={this.props.addMainScreen}
          mainScr={this.props.moneyBox.mainScr}
        />
        <MainScreenContainer />
      </div>
    );
  };
}

export default App;
