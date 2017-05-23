import React, {Component}  from 'react';
import { Provider } from 'react-redux';
import Store from '../stores/store'

// import '/public/font-awesome.min.css';

/**
 * Outer most component container after Router. 
 * This is the place to put globally used components like Toast/Dialogs.
 * 
 * @export
 * @class AppRoot
 * @extends {Component}
 */
export default class AppRoot extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}