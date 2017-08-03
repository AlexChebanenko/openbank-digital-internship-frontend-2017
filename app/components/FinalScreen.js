const React = require('react');

const buttonStyle = {
  'margin-left': 30,
  width: 150,
  height: 50,
  color: 'white',
  'background-color': 'deepskyblue'
};

class FinalScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style = {{'margin-left': 300, 'margin-top': 300}}>
        <div> Галочка </div>
        <div> {this.props.amount}</div>
        <div> Открытие накопительного счета </div>
        <div>
          <input type = 'button' style={buttonStyle} onClick = {this.props.isDone} value = "Готово" />
        </div>
      </div>
    );
  }
}

module.exports = FinalScreen;