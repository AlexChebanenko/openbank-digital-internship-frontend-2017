import {Container} from 'flux/utils';
import MainMenu from '../MainMenu.react';
import HomeStore from '../../stores/HomeStore';

function getStores() {
  return [
    HomeStore,
  ];
}

function getState() {
  return HomeStore.getState();
}

export default Container.createFunctional(MainMenu, getStores, getState);