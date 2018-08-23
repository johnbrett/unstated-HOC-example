import { Container } from "unstated";

interface CounterState {
  count: number;
}

class CounterContainer extends Container<CounterState> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export { CounterContainer };
