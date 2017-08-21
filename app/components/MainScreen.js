import React from 'react';

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    const {json} = this.props;
    this.state = {
      userInput: json.defaultAmount.RUR,
      percent: json.interestPercentage.RUR[json.defaultAmount.RUR] + ' %',
      profit:  '+ ' + Math.round((json.defaultAmount.RUR * json.interestPercentage.RUR[json.defaultAmount.RUR]) / 1200) + ' ₽'
    };
    this.handleInput = this.handleInput.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.cancelOperation = this.cancelOperation.bind(this);
  } 

  handleInput(event) {
    const {json: {interestPercentage}, currency} = this.props;
    const curValue = event.target.value;
    const mathValue = curValue.replace(",",".");

    let curPercent = 0;
    const interest = interestPercentage[currency.name.toUpperCase()];
    for (let i in interest) {
      if(Number(mathValue) >= Number(i)) {
        curPercent = interest[i];
      }
    }
    const curProfit = Math.round((curPercent * mathValue) / 1200);
    this.setState({
      userInput: curValue,
      percent: curPercent + ' %',
      profit: '+ ' + curProfit + ' ' + currency.symbol
    });

  }

  handleButton() {
    this.props.changeAmount(this.state.userInput);
    this.props.buttonChange();
  }

  cancelOperation() {
    this.props.onChange();
    this.setState({
      userInput: this.props.json.defaultAmount.RUR,
      percent: 0 + ' %',
      profit: 0 + ' ₽'
    })
  }

  changeCurrency(event) {
    const {json: {interestPercentage, defaultAmount}} = this.props;
    const currencyName = event.target.getAttribute('value');
    let currencySymbol = '';

    switch(currencyName) {
        case "rur": 
          currencySymbol = '₽';
          break;
        case "usd":
          currencySymbol = '$';
          break;
        case "eur":
          currencySymbol = '€';
          break;
    }

    this.props.setCurrency(currencyName,currencySymbol);

    const defAm = defaultAmount[currencyName.toUpperCase()];
    const interest = interestPercentage[currencyName.toUpperCase()];

    this.setState({
      userInput: defAm,
      percent: interest[defAm] + ' %',
      profit: '+ ' + Math.round((defAm * interest[defAm]) / 1200) + ' ' + currencySymbol
    });

  }

  render() {

    const { json, json: {interestPercentage}, mainScr, currency } = this.props;
    const { userInput, percent, profit } = this.state;

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
      <div key = {i.toLowerCase()} className = {newStyle} onClick = {this.changeCurrency} value = {i.toLowerCase()}> {currencyTitle} </div>
      );
      rows.push(newOption);
    }

    return (
      <div>
        <div className = "border-property">
          {rows}
        </div>
        <div className = "input">
          <div className = "input-label-style">
            <label> Сумма счета </label>
          </div>
          <div className = "input-container">
            <div>
              <input type = "text" className = "input-style" onChange = {this.handleInput} value={userInput}/>
            </div>
            <div className = "input-currency-style">
              <label> {currency.symbol} </label>
            </div>
          </div>
        </div>
        <div className = "main-screen-flex-block">
          <div className = "main-screen-flex-element">
            <div>
              <div className = "text-style"> Если не снимать средства, </div>
              <div className = "text-style"> в конце месяца вы получите </div>
            </div>
            <div>&nbsp;</div>
            <div className = "profit-style">{profit}</div>
          </div>
          <div className = "main-screen-flex-element"> 
            <div> 
              <div className = "text-style"> Процентная ставка зависит </div>
              <div className = "text-style"> от минимального остатка на счёте </div>
            </div>
            <div>&nbsp;</div>
            <div className = "percent-style">{percent}</div>
          </div>
          <div className = "main-screen-flex-element">
            <a href = {json.tariffUrl}> О тарифе </a>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
        <div className = "main-screen-flex-block">
          <div>
            <input type = "button" className = "button-style" onClick = {this.handleButton} value = "Открыть копилку" />
          </div>
          <div>
            <div className = "cancel-button-style" onClick = {this.cancelOperation}> Отмена </div>
          </div>
        </div>
      </div>
    );
  }
}