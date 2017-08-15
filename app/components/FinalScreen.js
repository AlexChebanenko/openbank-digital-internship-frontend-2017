import React from 'react';

export class FinalScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "my-flex-container">
        <div className = "icon-success">
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