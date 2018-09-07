/*
  Simple to demo and play with some unstated concepts

  File descriptions:
    - Connect.tsx // redux-like "connect" for subscribing to stores via a HOC
    - CountDisplay.tsx // displays `count: 1`, subscribes to store for value
    - Counter.tsx // component for increasing/decreasing count
    - counterContainer.ts // the unstated container
    - index.tsx // app root
    - theme.tsx // required to make styled-componnts work with Typescript
*/

import * as React from "react";
import { Provider } from "unstated";
import { CounterContainer } from "./counterContainer";
import { Counter } from "./Counter";

// style-components requres being imported this way for TS
import styled, { injectGlobal } from "./theme";
injectGlobal`
  margin: 0;
  padding: 0;
`;

const customCounter = new CounterContainer({ count: 5 });

const Div = styled.div`
  text-align: center;
  font-family: "Roboto";
`;

export const App = () => (
  <Div>
    <h4>Unstated Demo</h4>
    <Provider>
      <Counter />
      <Counter />
    </Provider>
    <Provider inject={[customCounter]}>
      <Counter />
    </Provider>
  </Div>
);
