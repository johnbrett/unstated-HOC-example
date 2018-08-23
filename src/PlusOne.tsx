import * as React from "react";
import { CounterContainer } from "./counterContainer";
import { connectMap } from "./connect";

// when TS supports decorators:
//  https://github.com/Microsoft/TypeScript/issues/26347
// @connectMap({ counter: CounterContainer })
export class _PlusOne extends React.Component<{
  containers: { counter: CounterContainer };
}> {
  render() {
    const { state } = this.props.containers.counter;
    return <div>Plus One: {state.count + 1}</div>;
  }
}

const PlusOne = connectMap({ counter: CounterContainer })(_PlusOne);
export { PlusOne };
