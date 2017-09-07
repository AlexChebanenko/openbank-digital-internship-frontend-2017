import ActionTypes from './ActionTypes';
import AppDispatcher from '../data/AppDispatcher';

const Actions = {
  openSettings() {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.SETTINGS_OPENED,
      }
    );
  },

  switchViewAllSection(viewType) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.VIEWALL_SWITCHED,
        viewType,
      }
    );
  },

  runScenario(scenarioName) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.SCENARIO_SELECTED,
        scenarioName,
      }
    );
  },

  openRoom(roomName) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.ROOM_SELECTED,
        roomName,
      }
    );
  },

  openDevice(deviceId) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.DEVICE_SELECTED,
        deviceId,
      }
    );
  },

  showMoreItems() {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.VIEWMORE_SELECTED,
      }
    );
  },

  addNewDevice(deviceName, deviceModelDescription, deviceType) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.NEW_DEVICE_ADDED,
        deviceName,
        deviceModelDescription,
        deviceType,
      }
    );
  },

  addNewRoom(roomName, roomIcon) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.NEW_ROOM_ADDED,
        roomName,
        roomIcon,
      }
    );
  },

  changeRoomSettings(roomName, roomSettings) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.ROOM_SETTINGS_CHANGED,
        roomName,
        roomSettings,
      }
    )
  }

};

export default Actions;