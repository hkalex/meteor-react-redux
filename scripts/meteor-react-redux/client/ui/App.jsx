import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

import Routes from '../../imports/routes/routes';

/**
 * 
 * APP root component 
 * React-router integrated here. 
 * To create more routes, make them in imports/YOURPAGENAME/xx then import here (see TodoAPP)
 * Dont for get the Provider component when creating new top-level components. 
 * 
 */

/**
 * This is a Wrapper required for material-ui to use. 
 * 
 */
const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
);

Meteor.startup(() => {
  injectTapEventPlugin();
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
