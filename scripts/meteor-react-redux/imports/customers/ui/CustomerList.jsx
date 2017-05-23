import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import customerCollection from '/imports/customers/db/customers';

import {addCharNote, delCharNote, customerLoaded} from '../actions/actions';

class CustomerList extends Component {
  constructor(props) {
    super(props);
  }

  updateCustomerHandler(customer, type) {
    if (type === 'del') {
      this.props.dispatch(delCharNote(customer));
    } else {
      this.props.dispatch(addCharNote(customer));
    }
  }

  render() {
    if (!this.props.subReady) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      var rows = [];
      for(var id in this.props.customers) {
        var c = this.props.customers[id];
        rows.push(<div key={id}>
          <span>{c.name}</span> - <span>{c.note}</span>
          <input type="button" value="<" onClick={this.updateCustomerHandler.bind(this, c, "del")} />
          <input type="button" value=">" onClick={this.updateCustomerHandler.bind(this, c, "add")} />
          </div>)
      }
      return (
        <div>
          <div>
            {rows}
          </div>
        </div>
      );
      
    }
    
  }
}

const CustomerListContainer = createContainer((props) => {
  const userId = Meteor.userId();
  const customerSub = Meteor.subscribe('customers', userId);
  const customerData = props.customerData || customerCollection.find().fetch() || [];

  // save customers to store
  if (customerSub.ready()) {
    props.dispatch(customerLoaded(customerData));
  }

  return {
    subReady: customerSub.ready()
  }

}, CustomerList);

function mapStoreToProps(store) {
  var customers = store.customers;
  return {customers};
}

export default connect(mapStoreToProps)(CustomerListContainer);
