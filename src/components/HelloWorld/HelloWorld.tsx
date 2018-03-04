import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectHelloWorldGreeting, selectHelloWorldSubject } from './helloWorld-selectors';
import { connect } from 'react-redux';
import { HELLO_WORLD_CHANGE_GREETING, HELLO_WORLD_CHANGE_SUBJECT } from './helloWorld-actions';

interface HelloWorldProps {
  greeting: string;
  subject: string;
  changeGreeting: () => {};
  changeSubject: () => {};
}

class HelloWorld extends React.Component<HelloWorldProps, {}> {
  render() {
    const { greeting, subject, changeGreeting, changeSubject } = this.props;

    return (
      <div className='hello-world'>
        <div>{greeting} {subject}!</div>
        <div>
          <button onClick={changeGreeting}>change greeting</button>
          <button onClick={changeSubject}>change subject</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    subject: selectHelloWorldSubject(),
    greeting: selectHelloWorldGreeting(),
  });
}

function mapDispatchToProps(dispatch: (action: IAction) => {}) {
  return {
    changeGreeting: () => dispatch({
      type: HELLO_WORLD_CHANGE_GREETING,
      payload: 'Howdy',
    }),
    changeSubject: () => dispatch({
      type: HELLO_WORLD_CHANGE_SUBJECT,
      payload: 'Redux',
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
