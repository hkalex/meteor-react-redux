import { Meteor } from 'meteor/meteor';
import customers from '/imports/customers/db/customers';

Meteor.publish('customers', function () {
  return customers.find();
});
