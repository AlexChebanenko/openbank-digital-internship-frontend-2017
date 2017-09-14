import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../data/AppDispatcher';

class ViewStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.List([{screenType: 'main', screenName: 'main',},]);
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ROOM_SELECTED:
        return state.push({screenType: 'room', screenName: action.roomName,});
      case ActionTypes.DEVICE_SELECTED:
        return state.push({screenType: 'device', screenName: action.deviceId,});
      case ActionTypes.SETTINGS_OPENED:
        return state.push({screenType: 'settings', screenName: 'settings',});
      case ActionTypes.TRYING_TO_ADD_DEVICE_TO_ROOM:
        return state.push({screenType: 'room_add_device', screenName: action.roomName,});
      case ActionTypes.HOMEBUTTON_CLICKED:
        return state.pop();
      default:
        return state;
    }
  }
}

export default new ViewStore();