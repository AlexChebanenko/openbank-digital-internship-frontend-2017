import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../data/AppDispatcher';

class ViewStore extends ReduceStore {
  constructor(AppDispatcher) {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.List();
  }

  reduce(state, action) {

  }
}

export default ViewStore;