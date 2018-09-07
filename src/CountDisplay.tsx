import * as React from "react";
import { CounterContainer } from "./counterContainer";
import { Subscribe } from "unstated";
import styled from "./theme";

const Div = styled.div`
  display: inline-block;
  width: 5em;
`;

class CountDisplay extends React.Component<{
  label: string;
}> {
  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {counterCounter => (
          <Div>
            {this.props.label}: {counterCounter.state.count}
          </Div>
        )}
      </Subscribe>
    );
  }
}

export { CountDisplay };
