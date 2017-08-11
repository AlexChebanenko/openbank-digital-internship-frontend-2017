const React = require('react');

class FinalScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style = {{'margin-left': 300, 'margin-top': 300}}>
        <div className = "outer-style3">
          <div className = "check-style">✓</div>
        </div>
        <div className = "text-style">  { "- " +this.props.amount}</div>
        <div> Открытие накопительного счета </div>
        <div>
          <input type = 'button' className = 'button-style' onClick = {this.props.isDone} value = "Готово" />
        </div>
      </div>
    );
  }
}

module.exports = FinalScreen;