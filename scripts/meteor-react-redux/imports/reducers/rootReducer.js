import { combineReducers } from 'redux';

import customers from '/imports/customers/reducers/reducers';

const rootReducer = combineReducers({
  customers
});

export default rootReducer;
