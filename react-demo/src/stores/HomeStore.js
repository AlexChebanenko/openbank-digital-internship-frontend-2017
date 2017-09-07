import {ReduceStore} from 'flux/utils';
import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../data/AppDispatcher';
import Home from "../models/Home";


class HomeStore extends ReduceStore {
  constructor(AppDispatcher) {
    super(AppDispatcher);
  }

  getInitialState() {
    return new Home();
  }

  reduce(state, action) {
    switch (action.type) {

      case ActionTypes.NEW_DEVICE_ADDED:
        return state.addNewDevice(
          action.deviceName, action.deviceModelDescription, action.deviceType);

      case ActionTypes.NEW_ROOM_ADDED:
        return state.addNewRoom(action.roomName, action.roomIcon);

      case ActionTypes.ROOM_SETTINGS_CHANGED:
        if(action.roomSettings.newRoomName) {
          state.editRoomName(
            action.roomName, action.roomSettings.newRoomName);
        }
        if(action.roomSettings.newIcon) {
          state.editRoomIcon(action.roomName, action.roomSettings.newIcon);
        }
        return state;

      case ActionTypes.ROOM_DELETED:
        return state.deleteRoom(action.roomName);
    }
  }
}

export default HomeStore;