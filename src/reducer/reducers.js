import { CHANGE_DATA } from '../action/actions';

export const defaultState = {
  data: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return Object.assign({}, state, { data: action.data });    
    default:
      return state;
  }
}