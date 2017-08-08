const React = require('react');

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.json.defaultAmount.RUR,
      percent: this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR] + ' %',
      profit:  Math.round((this.props.json.defaultAmount.RUR * this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR]) / 1200) + ' ₽'
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
        profit: Math.round((this.props.json.defaultAmount.RUR * this.props.json.interestPercentage.RUR[this.props.json.defaultAmount.RUR]) / 1200) + ' ₽'
      });
    } else if (newCur === 'usd') {
      this.setState({
        userInput: this.props.json.defaultAmount.USD,
        percent: this.props.json.interestPercentage.USD[this.props.json.defaultAmount.USD] + ' %',
        profit: Math.round((this.props.json.defaultAmount.USD * this.props.json.interestPercentage.USD[this.props.json.defaultAmount.USD]) / 1200) + ' $'
      });
    } else {
      this.setState({
        userInput: this.props.json.defaultAmount.EUR,
        percent: this.props.json.interestPercentage.EUR[this.props.json.defaultAmount.EUR] + ' %',
        profit: Math.round((this.props.json.defaultAmount.EUR * this.props.json.interestPercentage.EUR[this.props.json.defaultAmount.EUR]) / 1200) + ' €'
      });
    }
  }

  render() {

    if (!this.props.mainScr) {
      return null;
    } 

    return (
      <div>
        <div className = 'border-property'>
          <div className = 'textStyle' onClick = {this.changeCurrency} value = 'rur'> РУБЛИ </div>
          <div className = 'selectedBorder' onClick = {this.changeCurrency} value = 'usd'> ДОЛЛАРЫ </div>
          <div className = 'textStyle' onClick = {this.changeCurrency} value = 'eur'> ЕВРО </div>
        </div>
        <div>
          <input type = 'text' className = 'input-style' onChange = {this.handleInput} value={this.state.userInput}/>
        </div>
        <div style = {{'margin-top': 20}}>
          <div style = {{display: 'inline-block', 'margin-left': 30}}>
            <div>
              <div> Если не снимать средства, </div>
              <div> в конце месяца вы получите </div>
            </div>
            <div style = {{color: 'lawngreen'}}>{this.state.profit}</div>
          </div>
          <div style = {{display: 'inline-block','margin-left': 30}}> 
            <div> 
              <div> Процентная ставка зависит </div>
              <div> от минимального остатка на счёте </div>
            </div>
            <div>{this.state.percent}</div>
          </div>
          <div style = {{display: 'inline-block', 'margin-left': 30}}>
            <a href = {this.props.json.tariffUrl}> О тарифе </a>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
        <div>
          <div style = {{ display: 'inline-block' }}>
            <input type = 'button' className = 'button-style' onClick = {this.handleButton} value = "Открыть копилку" />
          </div>
          <div style = {{ display: 'inline-block', 'margin-left': 50}}>
            <div style = {{'text-decoration': 'underline', color: 'deepskyblue'}} onClick = {this.cancelOperation}> Отмена </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainScreen;