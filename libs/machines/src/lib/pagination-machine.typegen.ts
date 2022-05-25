// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setTotalCountContext: 'UPDATE_TOTAL_COUNT';
    goToFirstPage: 'UPDATE_TOTAL_COUNT';
    setCurrentPageContext: 'UPDATE_CURRENT_PAGE';
    showErrorMessage:
      | 'UPDATE_CURRENT_PAGE'
      | 'NEXT_PAGE'
      | 'PREVIOUS_PAGE'
      | 'error.platform.paginationMachine.fetching:invocation[0]';
    setCurrentPageSizeContext: 'UPDATE_PAGE_SIZE';
    setNextPageContext: 'NEXT_PAGE';
    setPreviousPageContext: 'PREVIOUS_PAGE';
  };
  internalEvents: {
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
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    getPaginationByPage:
      | 'UPDATE_TOTAL_COUNT'
      | 'UPDATE_CURRENT_PAGE'
      | 'UPDATE_PAGE_SIZE'
      | 'NEXT_PAGE'
      | 'PREVIOUS_PAGE';
  };
  eventsCausingGuards: {
    currentPageIsNotAboveNewTotalPages: 'UPDATE_TOTAL_COUNT';
    currentPageIsBelowTotalPages: 'UPDATE_CURRENT_PAGE';
    canGoToNextPage: 'NEXT_PAGE';
    canGoToPreviousPage: 'PREVIOUS_PAGE';
  };
  eventsCausingDelays: {};
  matchesStates: 'idle' | 'fetching';
  tags: never;
}
