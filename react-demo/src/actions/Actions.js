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

  clickHomeButton() {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.HOMEBUTTON_CLICKED,
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
    console.log(`room ${roomName} was clicked.`);
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

  openAddDeviceScreen(roomName) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.TRYING_TO_ADD_DEVICE_TO_ROOM,
        roomName,
      }
    );
  },

  addDeviceToRoom(roomName, deviceId) {
    AppDispatcher.dispatch(
      {
        type: ActionTypes.DEVICE_ADDED_TO_ROOM,
        roomName,
        deviceId,
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