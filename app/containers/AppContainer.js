import React, { Component } from 'react';
import App from '../components/App';
import {Container} from 'flux/utils';
import MoneyBoxActions from '../data/MoneyBoxActions';
import MoneyBoxStore from '../data/MoneyBoxStore';

class AppContainer extends Component {
  static getStores() {
    return [
      MoneyBoxStore,
    ];
  }

  static calculateState() {
    return {
      moneyBox: MoneyBoxStore.getState(),
      addMainScreen: MoneyBoxActions.goToStepTwo,
      moneyBoxFinished: MoneyBoxActions.finishOperation,
    };
  }

  render() {
    return (
      <App {...this.state} />
    )
  }

}

export default Container.create(AppContainer);
