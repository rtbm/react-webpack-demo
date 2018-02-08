require('./helloWorld.scss');

import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectHelloWorldGreeting, selectHelloWorldSubject, selectHelloWorldTodos } from './helloWorld-selector';
import { connect } from 'react-redux';
import {
  HELLO_WORLD_ADD_TODO, HELLO_WORLD_CHANGE_GREETING, HELLO_WORLD_CHANGE_SUBJECT,
  HELLO_WORLD_TOGGLE_TODO
} from './helloWorld-actions';

interface HelloWorldProps {
  greeting: string;
  subject: string;
  todos: any[];
  addTodo: (payload: string) => {};
  changeGreeting: () => {};
  changeSubject: () => {};
  toggleTodo: (payload: number) => {};
}

class HelloWorld extends React.Component<HelloWorldProps, {}> {
  render() {
    const { greeting, subject, changeGreeting, changeSubject, addTodo, todos, toggleTodo } = this.props;

    let input: any;

    const todosItemsList = todos.map((n, i) => (
      <li key={i} onClick={() => toggleTodo(i)} className={n.done ? 'striked' : undefined}>{n.text}</li>
    ));

    return (
      <div className='hello-world'>
        <div>{greeting} {subject}!</div>
        <div>
          <button onClick={changeGreeting}>change greeting</button>
          <button onClick={changeSubject}>change subject</button>
        </div>

        <div>
          <ul>
            {todosItemsList}
          </ul>

          <input placeholder="Add todo..." ref={node => { input = node }} />
          <button onClick={() => addTodo(input.value)}>add todo</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    subject: selectHelloWorldSubject(),
    greeting: selectHelloWorldGreeting(),
    todos: selectHelloWorldTodos(),
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: (payload: string) => dispatch({
      type: HELLO_WORLD_ADD_TODO,
      payload: {
        text: payload,
        done: false,
      },
    }),
    toggleTodo: (payload: number) => dispatch({
      type: HELLO_WORLD_TOGGLE_TODO,
      payload,
    }),
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
