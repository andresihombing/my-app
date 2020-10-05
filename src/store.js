import { createStore } from 'redux';
import reducer from './reducer/reducers';

let store = createStore(reducer);

export default store;