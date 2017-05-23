import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';


import Store from '/imports/stores/store';

// pages
import AppRoot from '../ui/AppRoot';

// customers
import CustomerList from '/imports/customers/ui/CustomerList';


class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>

        <Route path="/" component={AppRoot} >
          <IndexRedirect to="/customer/list" />

          <Route path='/customer/list' component={CustomerList} />

        </Route>
      </Router>
    );
  }
}


export default class RoutesPage extends Component {
  render() {
    const RoutesPage = connect()(Routes);
    return (
      <Provider store={Store}>
        <RoutesPage {...this.props} />
      </Provider>
    );
  }
}
