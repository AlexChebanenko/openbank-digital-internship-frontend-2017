import {ReduceStore} from 'flux/utils';
import MoneyBoxActionTypes from './MoneyBoxActionTypes';
import MoneyBoxDispatcher from './MoneyBoxDispatcher';

class MoneyBoxStore extends ReduceStore {
  constructor() {
    super(MoneyBoxDispatcher);
  }

  getInitialState() {
    return {
      data: {
        title: "Моя Копилка – до 6,75%",
        caption: "Накопительный счёт с процентом на остаток",
        tariffUrl: "https://www.open.ru/deposits/my_moneybox",
        defaultAmount: {
          RUR: 50000,
          USD: 300,
          EUR: 300
        },
        interestPercentage: {
          RUR: {
            "0": 3,
            "10000": 5.5,
            "50000": 6.75
          },
          USD: {
            "0": 0,
            "300": 0.1,
            "30000": 0.2
          },
          EUR: {
            "0": 0,
            "300": 0.1,
            "30000": 0.2
          }
        }
      },
      mainScr: false,
      currency: {
        name: 'rur',
        symbol: '₽'
      },
      finalScr: false,
      validation: true,
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case MoneyBoxActionTypes.STEP_TWO:
        const {data: { defaultAmount, interestPercentage}, mainScr } = state;
        return {
          ...state,
          mainScr: !mainScr,
          userInput: defaultAmount.RUR,
          percent: interestPercentage.RUR[defaultAmount.RUR] + ' %',
          profit:  '+ ' + Math.round((defaultAmount.RUR * interestPercentage.RUR[defaultAmount.RUR]) / 1200) + ' ₽',
          currency: {
            name: 'rur',
            symbol: '₽',
          },
          validation: true,
        };

      case MoneyBoxActionTypes.NEW_CURRENCY:

        const currencyName = action.info;
        let currencySymbol = '';

        switch(currencyName) {
            case "rur":
              currencySymbol = '₽';
              break;
            case "usd":
              currencySymbol = '$';
              break;
            case "eur":
              currencySymbol = '€';
              break;
        }

        const defAm = state.data.defaultAmount[currencyName.toUpperCase()];
        let interest = state.data.interestPercentage[currencyName.toUpperCase()];

        return {
            ...state,
            currency: {
              name: currencyName,
              symbol: currencySymbol,
            },
            userInput: defAm,
            percent: interest[defAm] + ' %',
            profit: '+ ' + Math.round((defAm * interest[defAm]) / 1200) + ' ' + currencySymbol,
            validation: true,
        }

      case MoneyBoxActionTypes.NEW_INPUT:
        const {currency} = state;
        const curValue = action.input.replace(/[^0-9,.]/,"");
        const mathValue = curValue.replace(",",".");
        let validation = false;
        let validation_message = '';

        if (mathValue < 0.01) {
            validation_message = "Пожалуйста, введите сумму для зачисления на счёт";
        } else if ((mathValue > 12500000) && (currency.name === 'rur')) {
            validation_message = "Максимальная сумма для открытия счёта - 12 500 000 Р";
        } else if ((mathValue > 500000) && (currency.name === 'usd')) {
            validation_message = "Максимальная сумма для открытия счёта - 500 000 дол.";
        } else if ((mathValue > 500000) && (currency.name === 'eur')) {
            validation_message =  "Максимальная сумма для открытия счёта - 500 000 евро";
        } else {
            validation = true;
        }

        let curPercent = 0;
        interest = state.data.interestPercentage[currency.name.toUpperCase()];
        for (let i in interest) {
          if (Number(mathValue) >= Number(i)) {
            curPercent = interest[i];
          }
        }
        const curProfit = Math.round((curPercent * mathValue) / 1200);
        return {
          ...state,
          userInput: curValue,
          percent: curPercent + ' %',
          profit: '+ ' + curProfit + ' ' + currency.symbol,
          validation,
          validation_message,
        }

      case MoneyBoxActionTypes.STEP_THREE:

        if(state.validation){
          return {
            ...state,
            finalScr: true,
            amount: state.userInput,
          }
        }

        return state;

      case MoneyBoxActionTypes.CANCEL_OPERATION:

        return {
          ...state,
          mainScr: !state.mainScr,
          userInput: state.data.defaultAmount.RUR,
          percent: 0 + ' %',
          profit: 0 + ' ₽',
        }

      case MoneyBoxActionTypes.FINISH:
        return {
          ...state,
          mainScr: false,
          finalScr: false,
        };

      default:
        return state;
    }
  }
}

export default new MoneyBoxStore();
