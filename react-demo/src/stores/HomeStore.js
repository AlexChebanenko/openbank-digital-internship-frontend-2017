import {ReduceStore} from 'flux/utils';
import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../data/AppDispatcher';
import Home from '../models/Home';
import Lamp from "../models/devices/Lamp";
import Socket from "../models/devices/Socket";
import Lock from "../models/devices/Lock";

debugger;
const mockHomeState = {
  masterName: 'Дмитрий',
  rooms: [
    {
      roomName: '_home',
      roomIcon: 'home_icon.svg',
    },
    {roomName: 'Гостиная', roomIcon: './icons/guest.svg',},
    {roomName: 'Прихожая', roomIcon: './icons/hall.svg',},
    {roomName: 'Кухня', roomIcon: './icons/kitchen.svg',},
    {roomName: 'Спальня', roomIcon: './icons/bedroom.svg',},
    {roomName: 'Кабинет', roomIcon: './icons/office.svg',},
    {roomName: 'Ванная', roomIcon: './icons/bathroom.svg',},
    {roomName: 'Туалет', roomIcon: './icons/toilet.svg',},
    {roomName: 'Детская', roomIcon: './icons/childroom.svg',},
  ],
  devices: [
    new Lock(0, 'Замок1', 'Описание замка'),
    new Lamp(1, 'Лампа1', 'Описание лампы'),
    new Lamp(2, 'Лампа2', 'Описание лампы'),
    new Lamp(3, 'Лампа3', 'Описание лампы'),
    new Socket(4, 'Розетка1', 'Описание розетки'),
    new Socket(5, 'Розетка2', 'Описание розетки'),
    new Socket(6, 'Розетка3', 'Описание розетки'),
    new Lamp(7, 'Лампа4', 'Описание лампы'),
    new Lamp(8, 'Лампа5', 'Описание лампы'),
    new Socket(9, 'Розетка4', 'Описание розетки'),
    new Socket(10, 'Розетка5', 'Описание розетки'),
    new Socket(11, 'Розетка6', 'Описание розетки'),
    new Lock(12, 'Замок2', 'Описание замка'),
    new Socket(13, 'Розетка7', 'Описание розетки'),
    new Lamp(14, 'Лампа6', 'Описание лампы'),
    new Lamp(15, 'Лампа7', 'Описание лампы'),
    new Lamp(16, 'Лампа8', 'Описание лампы'),
    new Socket(17, 'Розетка8', 'Описание розетки'),
    new Socket(18, 'Розетка9', 'Описание розетки'),
    new Socket(19, 'Розетка10', 'Описание розетки'),
    new Lamp(20, 'Лампа9', 'Описание лампы'),
    new Socket(21, 'Розетка11', 'Описание розетки'),
    new Lamp(22, 'Лампа10', 'Описание лампы'),
    new Socket(23, 'Розетка12', 'Описание розетки'),
    new Lamp(24, 'Лампа11', 'Описание лампы'),
    new Lamp(25, 'Лампа12', 'Описание лампы'),
    new Lamp(26, 'Лампа13', 'Описание лампы'),
    new Socket(27, 'Розетка13', 'Описание розетки'),
    new Socket(28, 'Розетка14', 'Описание розетки'),
    new Lock(29, 'Замок3', 'Описание замка'),
    new Lamp(30, 'Лампа14', 'Описание лампы'),
    new Socket(31, 'Розетка15', 'Описание розетки'),
    new Socket(32, 'Розетка16', 'Описание розетки'),

  ]

};

class HomeStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return new Home(mockHomeState);
  }

  reduce(state, action) {
    let newState = state;
    switch (action.type) {
      case ActionTypes.NEW_DEVICE_ADDED:
        return new Home(state).addNewDevice(
          action.deviceName, action.deviceModelDescription, action.deviceType);

      case ActionTypes.DEVICE_ADDED_TO_ROOM:
        newState = new Home(state);
        newState.addDeviceToRoom(action.deviceId, action.roomName);
        return newState;

      case ActionTypes.NEW_ROOM_ADDED:
        return new Home(state).addNewRoom(action.roomName, action.roomIcon);

      case ActionTypes.ROOM_SETTINGS_CHANGED:
        newState = new Home(state);
        if(action.roomSettings.newRoomName) {
          newState.editRoomName(
            action.roomName, action.roomSettings.newRoomName);
        }
        if(action.roomSettings.newIcon) {
          newState.editRoomIcon(action.roomName, action.roomSettings.newIcon);
        }
        return newState;

      case ActionTypes.ROOM_DELETED:
        return new Home(state).deleteRoom(action.roomName);

      default:
        return state;
    }
  }
}

export default new HomeStore();