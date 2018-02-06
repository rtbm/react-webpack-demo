import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectHelloWorldGreeting, selectHelloWorldSubject } from './helloWorld-selector';
import { connect } from 'react-redux';
import { HELLO_WORLD_CHANGE_GREETING, HELLO_WORLD_CHANGE_SUBJECT } from './helloWorld-actions';

interface HelloWorldProps {
  greeting: string;
  subject: string;
  handleChangeGreetingClick: () => {},
  handleChangeSubjectClick: () => {},
}

class HelloWorld extends React.Component<HelloWorldProps, {}> {
  render() {
    const { greeting, subject, handleChangeGreetingClick, handleChangeSubjectClick } = this.props;

    return (
      <div>
        <div>{greeting} {subject}!</div>
        <div>
          <button onClick={handleChangeGreetingClick}>change greeting</button>
          <button onClick={handleChangeSubjectClick}>change subject</button>
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

function mapDispatchToProps(dispatch: any) {
  return {
    handleChangeGreetingClick: () => dispatch({
      type: HELLO_WORLD_CHANGE_GREETING,
      payload: 'Howdy',
    }),
    handleChangeSubjectClick: () => dispatch({
      type: HELLO_WORLD_CHANGE_SUBJECT,
      payload: 'Redux',
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
