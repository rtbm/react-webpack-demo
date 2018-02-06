import * as React from 'react';

interface HelloWorldProps {}

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
  render() {
    return (
      <div>
        <div>Hello World!</div>
      </div>
    )
  }
}
