// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    updateType: "UPDATE";
    bakingTick: "BAKING_TICK";
    setBaking: "NEXT";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    bake: "done.invoke.pizzaMachine.startBaking:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    bake: "NEXT";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "setType" | "setToppings" | "setAddress" | "startBaking";
  tags: never;
}
