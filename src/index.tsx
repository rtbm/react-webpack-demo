import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { HelloWorld } from './HelloWorld/HelloWorld';

ReactDOM.render(
  <HelloWorld greeting='Hello' subject='World' />,
  document.getElementById('app')
);
