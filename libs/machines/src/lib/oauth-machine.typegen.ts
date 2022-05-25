// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    showErrorMessage:
      | 'error.platform.oauthMachine.logInWithProvider:invocation[0]'
      | 'error.platform.oauthMachine.getUserWithProvider:invocation[0]';
    setProviderUserContext: 'done.invoke.oauthMachine.getUserWithProvider:invocation[0]';
  };
  internalEvents: {
    'error.platform.oauthMachine.logInWithProvider:invocation[0]': {
      type: 'error.platform.oauthMachine.logInWithProvider:invocation[0]';
      data: unknown;
    };
    'error.platform.oauthMachine.getUserWithProvider:invocation[0]': {
      type: 'error.platform.oauthMachine.getUserWithProvider:invocation[0]';
      data: unknown;
    };
    'done.invoke.oauthMachine.getUserWithProvider:invocation[0]': {
      type: 'done.invoke.oauthMachine.getUserWithProvider:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.oauthMachine.logInWithProvider:invocation[0]': {
      type: 'done.invoke.oauthMachine.logInWithProvider:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.oauthMachine.checkingIfLoggedIn:invocation[0]': {
      type: 'done.invoke.oauthMachine.checkingIfLoggedIn:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    logInWithProvider: 'done.invoke.oauthMachine.logInWithProvider:invocation[0]';
    getUserWithProvider: 'done.invoke.oauthMachine.getUserWithProvider:invocation[0]';
    checkIfLoggedIn: 'done.invoke.oauthMachine.checkingIfLoggedIn:invocation[0]';
  };
  missingImplementations: {
    actions: 'showErrorMessage' | 'setProviderUserContext';
    services: 'logInWithProvider' | 'getUserWithProvider' | 'checkIfLoggedIn';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    logInWithProvider: 'LOG_IN';
    getUserWithProvider:
      | 'done.invoke.oauthMachine.logInWithProvider:invocation[0]'
      | 'done.invoke.oauthMachine.checkingIfLoggedIn:invocation[0]';
    checkIfLoggedIn: 'xstate.init';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'loggedOut'
    | 'logInWithProvider'
    | 'getUserWithProvider'
    | 'loggedIn'
    | 'checkingIfLoggedIn';
  tags: never;
}
