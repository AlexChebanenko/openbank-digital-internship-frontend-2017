import React from 'react';
import {StartScreen} from './StartScreen';
import {MainScreen} from './MainScreen';
import {FinalScreen} from './FinalScreen';

const json = {
  title: "Моя Копилка – до 6,75%",
  caption: "Накопительный счёт с процентом на остаток",
  tariffUrl: "https://www.open.ru/deposits/my_moneybox",
  defaultAmount: {
    RUR: 50000,
    USD: 300,
    EUR: 300
  },
  interestPercentage: {
    RUR: {
      "0": 3,
      "10000": 5.5,
      "50000": 6.75
    },
    USD: {
      "0": 0,
      "300": 0.1,
      "30000": 0.2
    },
    EUR: {
      "0": 0,
      "300": 0.1,
      "30000": 0.2
    }
  }
}

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainScr: false,
      currency: {
        name: 'rur',
        symbol: '₽'
      },
      finalScr: false,
      amount: 0
    };
  }
    
  addMainScreen = () => {
    this.setState({
      mainScr: !this.state.mainScr
    });
  };

  setCurrency = (name, symbol) => {
    this.setState({
      currency: {
        name,
        symbol
      }
    });
  };

  openFinalScreen = () => {
    this.setState({
      finalScr: true,
    });
  };

  moneyBoxFinished = () => {
    this.setState({
      mainScr: false,
      finalScr: false
    });
  };

  changeAmount = (amount) => {
    this.setState({
      amount
    });
  };

  render() {

    if (this.state.finalScr) {
      return ( 
        <FinalScreen 
          isDone={this.moneyBoxFinished}
          amount={this.state.amount}
        />
      );
    } 
    
    return (
      <div className = "app-style">
        <StartScreen 
          json={json} 
          onChange={this.addMainScreen} 
          mainScr={this.state.mainScr}
        />
        <MainScreen 
          json={json} 
          mainScr={this.state.mainScr} 
          currency={this.state.currency} 
          setCurrency={this.setCurrency} 
          onChange={this.addMainScreen} 
          buttonChange={this.openFinalScreen} 
          changeAmount={this.changeAmount}
        />
      </div>
    );
  };
}