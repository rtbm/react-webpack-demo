import * as React from 'react';

interface HelloWorldProps {
  greeting: string;
  subject: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
  render() {
    const { greeting, subject } = this.props;

    return (
      <div>
        <div>{greeting} {subject}!</div>
      </div>
    )
  }
}
