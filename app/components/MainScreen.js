const React = require('react');

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.json.defaultAmount.RUR,
      percent: this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR] + ' %',
      profit:  '+ ' + Math.round((this.props.json.defaultAmount.RUR * this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR]) / 1200) + ' ₽'
    };
    this.handleInput = this.handleInput.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.cancelOperation = this.cancelOperation.bind(this);
  }

  handleInput(event) {
    const curValue = event.target.value;
    if(this.props.currency === 'rur') {
      let curPercent = 0;
      const interest = this.props.json.interestPercentage.RUR;
      for (let i in interest) {
        if(+curValue >= +i) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * curValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' ₽'
      });
    } else if (this.props.currency === 'usd') {
      let curPercent = 0;
      const interest = this.props.json.interestPercentage.USD;
      for (let i in interest) {
        if(+curValue >= +i) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * curValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' $'
      });
    } else {
      let curPercent = 0;
      const interest = this.props.json.interestPercentage.EUR;
      for (let i in interest) {
        if(+curValue >= +i) {
          curPercent = interest[i];
        }
      }
      const curProfit = Math.round((curPercent * curValue) / 1200);
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
      userInput: '',
      percent: 0 + ' %',
      profit: 0 + ' ₽'
    })
  }

  changeCurrency(event) {
    const newCur = event.target.getAttribute('value');
    this.props.setCurrency(newCur);
    if (newCur === 'rur') {
      this.setState({
        userInput: this.props.json.defaultAmount.RUR,
        percent: this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR] + ' %',
        profit: '+ ' + Math.round((this.props.json.defaultAmount.RUR * this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR]) / 1200) + ' ₽'
      });
    } else if (newCur === 'usd') {
      this.setState({
        userInput: this.props.json.defaultAmount.USD,
        percent: this.props.json.interestPercentage.USD[this.props.json.defaultAmount.USD] + ' %',
        profit: '+ ' + Math.round((this.props.json.defaultAmount.USD * this.props.json.interestPercentage.USD[this.props.json.defaultAmount.USD]) / 1200) + ' $'
      });
    } else {
      this.setState({
        userInput: this.props.json.defaultAmount.EUR,
        percent: this.props.json.interestPercentage.EUR[this.props.json.defaultAmount.EUR] + ' %',
        profit: '+ ' + Math.round((this.props.json.defaultAmount.EUR * this.props.json.interestPercentage.EUR[this.props.json.defaultAmount.EUR]) / 1200) + ' €'
      });
    }
  }

  render() {

    if (!this.props.mainScr) {
      return null;
    } 

    let rows = [];

    const option = this.props.json.interestPercentage;
    let currencyTitle = ''

    for (let i in option) {


      if (i === 'RUR') {
        currencyTitle = 'РУБЛИ';
      } else if (i === 'USD') {
        currencyTitle = 'ДОЛЛАРЫ';
      } else {
        currencyTitle = 'ЕВРО';
      }

      const newStyle = (i.toLowerCase() === this.props.currency) ? 'selected-border' : 'currency-text-style';

      const newOption = ( 
      <div className = {newStyle} onClick = {this.changeCurrency} value = {i.toLowerCase()}> {currencyTitle} </div>
      );
      rows.push(newOption);
    }

    return (
      <div>
        <div className = "border-property">
          {rows}
        </div>
        <div>
          <input type = "text" className = "input-style" onChange = {this.handleInput} value={this.state.userInput}/>
        </div>
        <div className = "main-screen-flex-block">
          <div className = "main-screen-flex-element">
            <div>
              <div className = "text-style"> Если не снимать средства, </div>
              <div className = "text-style"> в конце месяца вы получите </div>
            </div>
            <div>&nbsp;</div>
            <div className = "profit-style">{this.state.profit}</div>
          </div>
          <div className = "main-screen-flex-element"> 
            <div> 
              <div className = "text-style"> Процентная ставка зависит </div>
              <div className = "text-style"> от минимального остатка на счёте </div>
            </div>
            <div>&nbsp;</div>
            <div className = "percent-style">{this.state.percent}</div>
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

module.exports = MainScreen;