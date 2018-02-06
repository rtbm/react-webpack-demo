import * as React from 'react'
import * as ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld/HelloWorld';

import { Provider } from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('app'),
);
