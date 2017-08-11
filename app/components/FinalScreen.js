const React = require('react');

class FinalScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'my-flex-container'>
        <div className = "my-flex-block">
          <div className = "check-style">✓</div>
        </div>
        <div className = "my-flex-block-1">  { "- " +this.props.amount + ' ₽'}</div>
        <div className = 'my-flex-block-2'> Открытие накопительного счета </div>
        <div>
          <input type = 'button' className = 'button-style' onClick = {this.props.isDone} value = "Готово" />
        </div>
      </div>
    );
  }
}

module.exports = FinalScreen;