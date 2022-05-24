// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    showErrorMessage:
      | "error.platform.oauthMachine.SignInWithProvider:invocation[0]"
      | "error.platform.oauthMachine.GetUserWithProvider:invocation[0]";
    setProviderUserContext: "done.invoke.oauthMachine.GetUserWithProvider:invocation[0]";
  };
  internalEvents: {
    "error.platform.oauthMachine.SignInWithProvider:invocation[0]": {
      type: "error.platform.oauthMachine.SignInWithProvider:invocation[0]";
      data: unknown;
    };
    "error.platform.oauthMachine.GetUserWithProvider:invocation[0]": {
      type: "error.platform.oauthMachine.GetUserWithProvider:invocation[0]";
      data: unknown;
    };
    "done.invoke.oauthMachine.GetUserWithProvider:invocation[0]": {
      type: "done.invoke.oauthMachine.GetUserWithProvider:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.oauthMachine.SignInWithProvider:invocation[0]": {
      type: "done.invoke.oauthMachine.SignInWithProvider:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    signInWithProvider: "done.invoke.oauthMachine.SignInWithProvider:invocation[0]";
    getUserWithProvider: "done.invoke.oauthMachine.GetUserWithProvider:invocation[0]";
  };
  missingImplementations: {
    actions: "showErrorMessage" | "setProviderUserContext";
    services: "signInWithProvider" | "getUserWithProvider";
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    signInWithProvider: "SIGN_IN";
    getUserWithProvider: "done.invoke.oauthMachine.SignInWithProvider:invocation[0]";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "SignIn"
    | "SignInWithProvider"
    | "GetUserWithProvider"
    | "Main";
  tags: never;
}
