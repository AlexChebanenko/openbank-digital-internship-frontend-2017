import React, { Component } from 'react';
import MainScreen from '../components/MainScreen';
import {Container} from 'flux/utils';
import MoneyBoxActions from '../data/MoneyBoxActions';
import MoneyBoxStore from '../data/MoneyBoxStore';

class MainScreenContainer extends Component {
  static getStores() {
    return [
      MoneyBoxStore,
    ];
  }

  static calculateState() {
    return {
      moneyBox: MoneyBoxStore.getState(),
      cancelOperation: MoneyBoxActions.cancelOperation,
      openFinalScreen: MoneyBoxActions.goToStepThree,
      changeCurrency: MoneyBoxActions.changeCurrency,
      handleInput: MoneyBoxActions.handleInput,
    };
  }

  render() {
    return (
      <MainScreen {...this.state} />
    )
  }

}

export default Container.create(MainScreenContainer);
