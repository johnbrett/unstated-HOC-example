import * as React from "react";
import { CounterContainer } from "./counterContainer";
import { ConnectMap } from "./Connect";
import styled from "./theme";

const Display = styled.div`
  display: inline-block;
  width: 5em;
`;
// when TS supports decorators:
//  https://github.com/Microsoft/TypeScript/issues/26347
// @connectMap({ counter: CounterContainer })
class _CountDisplay extends React.Component<{
  label: string;
  containers: { counter: CounterContainer };
}> {
  render() {
    const { state } = this.props.containers.counter;
    return (
      <Display>
        {this.props.label}: {state.count}
      </Display>
    );
  }
}

const CountDisplay = ConnectMap({ counter: CounterContainer })(_CountDisplay);
export { CountDisplay };
