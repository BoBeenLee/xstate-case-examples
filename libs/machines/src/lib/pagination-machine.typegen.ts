// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setPaginationContext:
      | 'UPDATE_TOTAL_COUNT'
      | 'CHANGE_CURRENT_PAGE'
      | 'CHANGE_PAGE_SIZE'
      | 'NEXT_PAGE'
      | 'PREVIOUS_PAGE';
    goToFirstPage: 'UPDATE_TOTAL_COUNT';
    showErrorMessage:
      | 'CHANGE_CURRENT_PAGE'
      | 'NEXT_PAGE'
      | 'PREVIOUS_PAGE'
      | 'error.platform.paginationMachine.fetching:invocation[0]';
    updatePaginations: 'done.invoke.paginationMachine.fetching:invocation[0]';
  };
  internalEvents: {
    'error.platform.paginationMachine.fetching:invocation[0]': {
      type: 'error.platform.paginationMachine.fetching:invocation[0]';
      data: unknown;
    };
    'done.invoke.paginationMachine.fetching:invocation[0]': {
      type: 'done.invoke.paginationMachine.fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPaginationByPage: 'done.invoke.paginationMachine.fetching:invocation[0]';
  };
  missingImplementations: {
    actions:
      | 'setPaginationContext'
      | 'goToFirstPage'
      | 'showErrorMessage'
      | 'updatePaginations';
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
