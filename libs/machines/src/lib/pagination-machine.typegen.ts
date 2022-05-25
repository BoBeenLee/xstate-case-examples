// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setPaginationContext: 'done.invoke.paginationMachine.Fetching:invocation[0]';
    showErrorMessage: 'error.platform.paginationMachine.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.paginationMachine.Fetching:invocation[0]': {
      type: 'done.invoke.paginationMachine.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.paginationMachine.Fetching:invocation[0]': {
      type: 'error.platform.paginationMachine.Fetching:invocation[0]';
      data: unknown;
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPaginationByPage: 'done.invoke.paginationMachine.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: 'setPaginationContext' | 'showErrorMessage';
    services: 'getPaginationByPage';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    getPaginationByPage: 'CHANGE_CURRENT_PAGE' | 'CHANGE_PAGE_SIZE';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: 'Idle' | 'Fetching';
  tags: never;
}
