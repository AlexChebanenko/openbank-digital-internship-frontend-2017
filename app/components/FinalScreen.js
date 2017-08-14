const React = require('react');

class FinalScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "my-flex-container">
        <div className = "final-screen-outer-style">
          <div className = "check-style">✓</div>
        </div>
        <div className = "amount-style">  { '- ' +this.props.amount + ' ₽'}</div>
        <div className = "final-screen-text-style"> Открытие накопительного счета </div>
        <div>
          <input type = "button" className = "button-style" onClick = {this.props.isDone} value = "Готово" />
        </div>
      </div>
    );
  }
}

module.exports = FinalScreen;