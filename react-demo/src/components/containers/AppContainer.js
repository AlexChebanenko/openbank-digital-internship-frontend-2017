import {Container} from 'flux/utils';
import React from 'react';
import AppView from '../views/AppView.react';
import HomeStore from '../../stores/HomeStore';
import ViewStore from "../../stores/ViewStore";

class AppContainer extends React.Component {

  static getStores() {
    return [
      HomeStore,
      ViewStore,
    ];
  }

  static calculateState() {
    return {
      home: HomeStore.getState(),
      navigation: ViewStore.getState().last(),
    };
  }

  render() {
    return (
      <AppView {...this.state} />
    );
  }
}


export default Container.create(AppContainer);