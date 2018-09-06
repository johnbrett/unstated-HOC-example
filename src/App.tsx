import * as React from "react";
import { Provider } from "unstated";
import styled, { injectGlobal } from "./theme";
import { CounterContainer } from "./counterContainer";
import { Counter } from "./Counter";

injectGlobal`
  margin: 0;
  padding: 0;
`;

const customCounter = new CounterContainer({ count: 5 });

const AppContainer = styled.div`
  text-align: center;
  font-family: "Roboto";
`;

export const App = () => (
  <AppContainer>
    <h4>Unstated Demo</h4>
    <Provider>
      <Counter />
      <Counter />
    </Provider>
    <Provider inject={[customCounter]}>
      <Counter />
    </Provider>
  </AppContainer>
);
