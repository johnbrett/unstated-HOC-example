import * as React from "react";
import { Subscribe, ContainerType, Container } from "unstated";

type ContainersArray = (ContainerType<object> | Container<object>)[];

export const Connect = (subscriptions: ContainersArray) => (
  component: React.ComponentClass<{ containers: Container<object>[] }>
) => (props: object) => (
  <Subscribe to={subscriptions}>
    {(...containers) =>
      React.createElement(component, { containers, ...props })
    }
  </Subscribe>
);

type ContainersObject = {
  [index: string]: ContainerType<object> | Container<object>;
};

export const ConnectMap = (subscriptions: ContainersObject) => (
  component: React.ComponentClass<{
    containers: { [index: string]: Container<object> };
  }>
) => (props: object) => {
  const containerArray = Object.values(subscriptions);
  return (
    <Subscribe to={containerArray}>
      {(...containers) => {
        const containerMap = {};
        Object.keys(subscriptions).forEach((key, index) => {
          containerMap[key] = containers[index];
        });
        return React.createElement(component, {
          containers: containerMap,
          ...props
        });
      }}
    </Subscribe>
  );
};
