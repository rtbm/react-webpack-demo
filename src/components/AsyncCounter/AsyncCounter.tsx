import * as React from 'react';
import { ASYNC_COUNTER_DECREMENT, ASYNC_COUNTER_INCREMENT, ASYNC_COUNTER_INCREMENT_ASYNC,
} from './asyncCounter-actions';
import { createStructuredSelector } from 'reselect';
import { selectAsyncCounterValue } from './asyncCounter-selectors';
import { connect } from 'react-redux';

interface AsyncCounterProps {
  value: number;
  increment: () => {};
  decrement: () => {};
  incrementAsync: () => {};
}

class AsyncCounter extends React.Component<AsyncCounterProps, {}> {
  render() {
    const { value, increment, decrement, incrementAsync } = this.props;

    return (
      <div>
        <div>{value}</div>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={incrementAsync}>increment async</button>
      </div>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    value: selectAsyncCounterValue(),
  });
}

function mapDispatchToProps(dispatch: (action: IAction) => {}) {
  return {
    increment: () => dispatch({
      type: ASYNC_COUNTER_INCREMENT,
    }),
    decrement: () => dispatch({
      type: ASYNC_COUNTER_DECREMENT,
    }),
    incrementAsync: () => dispatch({
      type: ASYNC_COUNTER_INCREMENT_ASYNC,
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncCounter);
