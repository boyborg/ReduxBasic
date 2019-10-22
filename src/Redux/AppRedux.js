import React, {Component} from 'react'; //GERBANG UTAMA
import allReducer from './reducer/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import Counter from './Counter';
import ReduxSafePlace from './ReduxSafePlace';
const store = createStore(allReducer);
export default class AppRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxSafePlace />
      </Provider>
    );
  }
}
