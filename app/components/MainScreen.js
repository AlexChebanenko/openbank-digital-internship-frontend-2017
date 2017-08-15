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

    if(currency === 'rur') {
      let curPercent = 0;
      const interest = interestPercentage.RUR;
      for (let i in interest) {
        if(Number(mathValue) >= Number(i)) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * mathValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' ₽'
      });
    } else if (currency === 'usd') {
      let curPercent = 0;
      const interest = interestPercentage.USD;
      for (let i in interest) {
        if(Number(mathValue) >= Number(i)) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * mathValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' $'
      });
    } else {
      let curPercent = 0;
      const interest = interestPercentage.EUR;
      for (let i in interest) {
        if(Number(mathValue) >= Number(i)) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * mathValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit:  '+ ' + curProfit + ' €'
      });
    }
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
    const newCur = event.target.getAttribute('value');
    this.props.setCurrency(newCur);
    if (newCur === 'rur') {
      this.setState({
        userInput: defaultAmount.RUR,
        percent: interestPercentage.RUR[defaultAmount.RUR] + ' %',
        profit: '+ ' + Math.round((defaultAmount.RUR * interestPercentage.RUR[defaultAmount.RUR]) / 1200) + ' ₽'
      });
    } else if (newCur === 'usd') {
      this.setState({
        userInput: defaultAmount.USD,
        percent: interestPercentage.USD[defaultAmount.USD] + ' %',
        profit: '+ ' + Math.round((defaultAmount.USD * interestPercentage.USD[defaultAmount.USD]) / 1200) + ' $'
      });
    } else {
      this.setState({
        userInput: defaultAmount.EUR,
        percent: interestPercentage.EUR[defaultAmount.EUR] + ' %',
        profit: '+ ' + Math.round((defaultAmount.EUR * interestPercentage.EUR[defaultAmount.EUR]) / 1200) + ' €'
      });
    }
  }

  render() {

    const { json: {interestPercentage}, mainScr, currency } = this.props;
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

      const newStyle = (i.toLowerCase() === currency) ? 'selected-border' : 'currency-text-style';

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
        <div>
          <input type = "text" className = "input-style" onChange = {this.handleInput} value={userInput}/>
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
            <a href = {this.props.json.tariffUrl}> О тарифе </a>
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