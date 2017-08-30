import MoneyBoxDispatcher from './MoneyBoxDispatcher';
import MoneyBoxActionTypes from './MoneyBoxActionTypes';

const Actions = {
  goToStepTwo() {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.STEP_TWO,
    });
  },

  changeCurrency(info) {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.NEW_CURRENCY,
      info,
    });
  },

  handleInput(input) {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.NEW_INPUT,
      input,
    });
  },

  cancelOperation() {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.CANCEL_OPPERATION,
    });
  },

  goToStepThree() {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.STEP_THREE,
    });
  },

  finishOperation() {
    MoneyBoxDispatcher.dispatch({
      type: MoneyBoxActionTypes.FINISH,
    });
  },
};

export default Actions;
