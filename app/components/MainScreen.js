import React from 'react';
import {Container} from 'flux/utils';
import MoneyBoxActions from '../data/MoneyBoxActions';
import MoneyBoxStore from '../data/MoneyBoxStore';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

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
    };
  }

  handleInput = (event) => {
    MoneyBoxActions.handleInput(event.target.value);
  };

  changeCurrency = (event) => {
    MoneyBoxActions.changeCurrency(event.target.getAttribute('value'));
  };

  render() {

    const { data,
      data: {
        interestPercentage
      },
      mainScr,
      currency,
      userInput,
      percent,
      profit,
      validation,
      validation_message
    } = this.state.moneyBox;

    if (!mainScr) {
      return null;
    }

    let rows = [];

    const option = interestPercentage;
    let currencyTitle = ''

    for (let i in option) {

      switch(i) {
        case "RUR":
          currencyTitle = 'РУБЛИ';
          break;
        case "USD":
          currencyTitle = 'ДОЛЛАРЫ';
          break;
        case "EUR":
          currencyTitle = 'ЕВРО';
          break;
      }

      const newStyle = (i.toLowerCase() === currency.name) ? 'currency-text-style selected-border' : 'currency-text-style';

      const newOption = (
      <div key={i.toLowerCase()} className={newStyle} onClick={this.changeCurrency} value={i.toLowerCase()}> {currencyTitle} </div>
      );
      rows.push(newOption);
    }

    return (
      <div>
        <div className="border-property">
          {rows}
        </div>
        <div className="input-container">
          <div className={validation ? "input" : "input invalid-input"}>
            <div className="input-label-style">
              <label> Сумма счета </label>
            </div>
            <div className="input-container">
              <div>
                <input type="text" className="input-style" onChange={this.handleInput} value={userInput}/>
              </div>
              <div className="input-currency-style">
                <label> {currency.symbol} </label>
              </div>
            </div>
          </div>
          <div className={validation ? "hidden" : "validation-message-style"}>
            <label>{validation_message}</label>
          </div>
        </div>
        <div className="main-screen-flex-block">
          <div className="main-screen-flex-element">
            <div>
              <div className="text-style"> Если не снимать средства, </div>
              <div className="text-style"> в конце месяца вы получите </div>
            </div>
            <div>&nbsp;</div>
            <div className="profit-style">{profit}</div>
          </div>
          <div className="main-screen-flex-element">
            <div>
              <div className="text-style"> Процентная ставка зависит </div>
              <div className="text-style"> от минимального остатка на счёте </div>
            </div>
            <div>&nbsp;</div>
            <div className="percent-style">{percent}</div>
          </div>
          <div className="main-screen-flex-element">
            <a href={data.tariffUrl}> О тарифе </a>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
        <div className="main-screen-flex-block">
          <div>
            <input type="button" className="button-style" onClick={this.state.openFinalScreen} value="Открыть копилку" />
          </div>
          <div>
            <div className="cancel-button-style" onClick={this.state.cancelOperation}> Отмена </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container.create(MainScreen);
