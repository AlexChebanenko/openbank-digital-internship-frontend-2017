import React from 'react';

class FinalScreen extends React.Component {

  render() {
    return (
      <div className="my-flex-container">
        <div className="icon-success"></div>
        <div className="amount-style">  { '- ' +this.props.amount + ' ₽'}</div>
        <div className="final-screen-text-style"> Открытие накопительного счета </div>
        <div>
          <input
            type="button"
            className="button-style"
            onClick={this.props.isDone}
            value="Готово"
          />
        </div>
      </div>
    );
  }
}

export default FinalScreen;
