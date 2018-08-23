import * as React from "react";
import { render } from "react-dom";
import { Provider } from "unstated";
import { CounterContainer } from "./counterContainer";
import { connect } from "./connect";

import { PlusOne } from "./PlusOne";

// when TS supports decorators:
//  https://github.com/Microsoft/TypeScript/issues/26347
// @connect([CounterContainer])
class _Counter extends React.Component<{
  containers: [CounterContainer];
}> {
  componentDidMount() {
    const [counterContainer] = this.props.containers;
    counterContainer.increment();
  }

  render() {
    const [counterContainer] = this.props.containers;
    const { state, increment, decrement } = counterContainer;
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
        <PlusOne />
      </div>
    );
  }
}

const Counter = connect([CounterContainer])(_Counter);

const customCounter = new CounterContainer();

render(
  <div>
    <Provider>
      <Counter />
      <Counter />
    </Provider>
    <Provider inject={[customCounter]}>
      <Counter />
    </Provider>
  </div>,
  document.getElementById("root")
);
