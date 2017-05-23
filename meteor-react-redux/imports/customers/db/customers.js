import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Mongo } from 'meteor/mongo';

export const CustomerSchemaDef = {
  name: {
      type: String
  },
  note: {
      type: String
  }
};

export const CustomerSchema = new SimpleSchema(CustomerSchemaDef);


const customers = new Mongo.Collection('customers');
customers.attachSchema(CustomerSchema);

customers.allow({
  insert: function () {
    // TODO check user and role
    return true;
  },
  update: function () {
    // TODO check user and role
    return true;
  },
  remove: function() {
    // TODO check user and role
    return true;
  }
});

export default customers;
