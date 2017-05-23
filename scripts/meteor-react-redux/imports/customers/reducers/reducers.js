import customerCollection from '../db/customers';

export default function customerReducer(state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_NOTE':
      var id = action.payload._id;
      customerCollection.update({_id: id}, {$set: {note: action.payload.note + '1'}});
      return state; // you don't need to return a new state, because customerCollection.update will trigger the refresh of the store
    case 'DEL_NOTE':
      var id = action.payload._id;
      var note = action.payload.note;
      note = note.substr(0, note.length - 1);
      customerCollection.update({_id: id}, {$set: {note}});
      return state; // you don't need to return a new state, because customerCollection.update will trigger the refresh of the store
    case 'CUSTOMER_LOADED':
      var customers = action.payload;
      var newState = {};
      for(var i=0; i<customers.length; i++) {
        newState[customers[i]._id] = customers[i];
      }
      return Object.assign(state, newState);
    default:
      return state;
  }
}
