require('./todoList.scss');

import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { TODO_LIST_ADD_TODO, TODO_LIST_TOGGLE_TODO } from './todoList-actions';
import { connect } from 'react-redux';
import { selectTodoListTodos } from './todoList-selectors';

interface TodoListProps {
  todos: any[];
  addTodo: (payload: string) => {};
  toggleTodo: (payload: number) => {};
}

class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const { addTodo, todos, toggleTodo } = this.props;

    let input: any;

    const todosItemsList = todos.map((n, i) => (
      <li key={i} onClick={() => toggleTodo(i)} className={n.done ? 'striked' : undefined}>{n.text}</li>
    ));

    return (
      <div className="todo-list">
        <ul>
          {todosItemsList}
        </ul>

        <input placeholder="Add todo..." ref={node => { input = node }} />
        <button onClick={() => addTodo(input.value)}>add todo</button>
      </div>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    todos: selectTodoListTodos(),
  });
}

function mapDispatchToProps(dispatch: (action: IAction) => {}) {
  return {
    addTodo: (payload: string) => dispatch({
      type: TODO_LIST_ADD_TODO,
      payload: {
        text: payload,
        done: false,
      },
    }),
    toggleTodo: (payload: number) => dispatch({
      type: TODO_LIST_TOGGLE_TODO,
      payload,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
