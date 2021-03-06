import * as React from "react";
import { CounterContainer } from "./counterContainer";
import { Connect } from "./Connect";
import { CountDisplay } from "./CountDisplay";
import styled from "./theme";

const Div = styled.div`
  display: block;
`;
const Button = styled.button`
  display: inline;
  margin: 5px;
`;

// when TS supports decorators:
//  https://github.com/Microsoft/TypeScript/issues/26347
// @Connect([CounterContainer])
class _Counter extends React.Component<{
  containers: [CounterContainer];
}> {
  componentDidMount() {
    const [counterContainer] = this.props.containers;
    counterContainer.increment();
  }

  render() {
    const [counterContainer] = this.props.containers;
    const { increment, decrement } = counterContainer;
    return (
      <Div>
        <Button onClick={decrement}>-</Button>
        <CountDisplay label="Count" />
        <Button onClick={increment}>+</Button>
      </Div>
    );
  }
}

const Counter = Connect([CounterContainer])(_Counter);
export { Counter };
