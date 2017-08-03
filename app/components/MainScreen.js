const React = require('react');

const textStyle = {
  display: 'inline-block',
  'margin-left': 30
}

const inputStyle = {
  'margin-top': 20,
  'margin-left': 30, 
  height: 30,
  width: 200,
  fontSize: 25
}

const buttonStyle = {
  'margin-left': 30,
  width: 150,
  height: 50,
  color: 'white',
  'background-color': 'deepskyblue'
}

const borderProperty = {
  'border-top': '1px outset #3a4c4f',
  'border-bottom': '1px inset #3a4c4f',
  'margin-top': 20
}

const selectedBorder = {
  display: 'inline-block',
  'margin-left': 30,
  'border-bottom': '3px solid #00BFFF'
}

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      percent: 0 + ' %',
      profit: 0 + ' ₽'
    };
    this.handleInput = this.handleInput.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput(event) {
    const curValue = event.target.value;
    if(this.props.currency === 'rur') {
      const curPercent = 5.75;
      const curProfit = Math.round((curPercent * curValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' ₽'
      });
    } else if (this.props.currency === 'usd') {
      const curPercent = 0.2;
      const curProfit = Math.round((curPercent * curValue) / 1200);
      this.setState({
        userInput: curValue,
        percent: curPercent + ' %',
        profit: '+ ' + curProfit + ' $'
      });
    } else {
      const curPercent = 0.2;
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

  changeCurrency(event) {
    const newCur = event.target.getAttribute('value');
    this.props.setCurrency(newCur);
    if (newCur === 'rur') {
      this.setState({
        userInput: '',
        percent: 0 + ' %',
        profit: 0 + ' ₽'
      });
    } else if (newCur === 'usd') {
      this.setState({
        userInput: '',
        percent: 0 + ' %',
        profit: 0 + ' $'
      });
    } else {
      this.setState({
        userInput: '',
        percent: 0 + ' %',
        profit: 0 + ' €'
      });
    }
  }

  render() {

    if (!this.props.mainScr) {
      return null;
    } 

    return (
      <div>
        <div style = {borderProperty}>
          <div style = {textStyle} onClick = {this.changeCurrency} value = 'rur'> РУБЛИ </div>
          <div style = {selectedBorder} onClick = {this.changeCurrency} value = 'usd'> ДОЛЛАРЫ </div>
          <div style = {textStyle} onClick = {this.changeCurrency} value = 'eur'> ЕВРО </div>
        </div>
        <div>
          <input type = 'text' style = {inputStyle} onChange = {this.handleInput} value={this.state.userInput}/>
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
            <input type = 'button' style = {buttonStyle} onClick = {this.handleButton} value = "Открыть копилку" />
          </div>
          <div style = {{ display: 'inline-block', 'margin-left': 50}}>
            <div style = {{'text-decoration': 'underline', color: 'deepskyblue'}}> Отмена </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainScreen;