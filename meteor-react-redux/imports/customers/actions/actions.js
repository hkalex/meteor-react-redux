export function addCharNote(customer) {
  return {
    type: 'ADD_NOTE',
    payload: customer
  }
}

export function delCharNote(customer) {
  return {
    type: 'DEL_NOTE',
    payload: customer
  }
}

export function customerLoaded(customers) {
  return {
    type: 'CUSTOMER_LOADED',
    payload: customers
  }
}