import React from "react";
import { Iterable } from "immutable";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export function toJS(WrappedComponent) {
  const asJS = wrappedComponentProps => {
    const KEY = 0;
    const VALUE = 1;

    const propsJS = Object.entries(wrappedComponentProps).reduce(
      (newProps, wrappedComponentProp) => {
        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
          wrappedComponentProp[VALUE]
        )
          ? wrappedComponentProp[VALUE].toJS()
          : wrappedComponentProp[VALUE];
        return newProps;
      },
      {}
    );

    return <WrappedComponent {...propsJS} />;
  };

  asJS.displayName = `toJS(${getDisplayName(WrappedComponent)}`;

  return asJS;
}
