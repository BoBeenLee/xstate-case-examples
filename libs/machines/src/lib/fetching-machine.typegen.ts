// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    resetErrorCount: 'done.invoke.fetchingMachine.Fetching:invocation[0]';
    showErrorMessage: 'error.platform.fetchingMachine.Fetching:invocation[0]';
    incrementErrorCount: 'error.platform.fetchingMachine.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.fetchingMachine.Fetching:invocation[0]': {
      type: 'done.invoke.fetchingMachine.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.fetchingMachine.Fetching:invocation[0]': {
      type: 'error.platform.fetchingMachine.Fetching:invocation[0]';
      data: unknown;
    };
    'xstate.after(RETRY_DELAY)#fetchingMachine.Waiting before retry': {
      type: 'xstate.after(RETRY_DELAY)#fetchingMachine.Waiting before retry';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    makeFetch: 'done.invoke.fetchingMachine.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: 'showErrorMessage';
    services: 'makeFetch';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    makeFetch:
      | 'FETCH'
      | 'xstate.after(RETRY_DELAY)#fetchingMachine.Waiting before retry';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {
    RETRY_DELAY: 'xstate.init';
  };
  matchesStates: 'Idle' | 'Fetching' | 'Waiting before retry' | 'Timed out';
  tags: never;
}
