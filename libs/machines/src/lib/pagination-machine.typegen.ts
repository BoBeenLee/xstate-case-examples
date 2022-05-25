// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setPaginationContext: 'done.invoke.paginationMachine.fetching:invocation[0]';
    showErrorMessage: 'error.platform.paginationMachine.fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.paginationMachine.fetching:invocation[0]': {
      type: 'done.invoke.paginationMachine.fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.paginationMachine.fetching:invocation[0]': {
      type: 'error.platform.paginationMachine.fetching:invocation[0]';
      data: unknown;
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPaginationByPage: 'done.invoke.paginationMachine.fetching:invocation[0]';
  };
  missingImplementations: {
    actions: 'setPaginationContext' | 'showErrorMessage';
    services: 'getPaginationByPage';
    guards:
      | 'currentPageIsNotAboveNewTotalPages'
      | 'currentPageIsBelowTotalPages'
      | 'currentPageIsNotAboveTotalPages'
      | 'currentPageIsEqualToOrAboveThanZero';
    delays: never;
  };
  eventsCausingServices: {
    getPaginationByPage:
      | 'UPDATE_TOTAL_COUNT'
      | 'CHANGE_CURRENT_PAGE'
      | 'CHANGE_PAGE_SIZE'
      | 'NEXT_PAGE'
      | 'PREVIOUS_PAGE';
  };
  eventsCausingGuards: {
    currentPageIsNotAboveNewTotalPages: 'UPDATE_TOTAL_COUNT';
    currentPageIsBelowTotalPages: 'CHANGE_CURRENT_PAGE';
    currentPageIsNotAboveTotalPages: 'NEXT_PAGE';
    currentPageIsEqualToOrAboveThanZero: 'PREVIOUS_PAGE';
  };
  eventsCausingDelays: {};
  matchesStates: 'idle' | 'fetching';
  tags: never;
}
