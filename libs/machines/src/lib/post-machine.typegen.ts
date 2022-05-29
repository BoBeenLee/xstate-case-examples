// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setPostContext:
      | 'done.invoke.postMachine.detail.fetching:invocation[0]'
      | 'done.invoke.postMachine.editing.editing:invocation[0]';
    deletePostContext: 'done.invoke.postMachine.detail.deleting:invocation[0]';
    setPostsContext: 'done.invoke.postMachine.list.fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.postMachine.detail.fetching:invocation[0]': {
      type: 'done.invoke.postMachine.detail.fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.postMachine.editing.editing:invocation[0]': {
      type: 'done.invoke.postMachine.editing.editing:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.postMachine.detail.deleting:invocation[0]': {
      type: 'done.invoke.postMachine.detail.deleting:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.postMachine.list.fetching:invocation[0]': {
      type: 'done.invoke.postMachine.list.fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPost: 'done.invoke.postMachine.detail.fetching:invocation[0]';
    deletePost: 'done.invoke.postMachine.detail.deleting:invocation[0]';
    upsertPost: 'done.invoke.postMachine.editing.editing:invocation[0]';
    getPosts: 'done.invoke.postMachine.list.fetching:invocation[0]';
  };
  missingImplementations: {
    actions: 'setPostContext' | 'deletePostContext' | 'setPostsContext';
    services: 'getPost' | 'deletePost' | 'upsertPost' | 'getPosts';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    getPost: 'FETCH_POST' | 'RETRY_POST';
    deletePost: 'DELETE_POST';
    upsertPost: 'EDIT';
    getPosts: 'FETCH_POSTS' | 'RETRY_POSTS';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'detail'
    | 'detail.idle'
    | 'detail.fetching'
    | 'detail.error'
    | 'detail.deleting'
    | 'editing'
    | 'editing.input'
    | 'editing.editing'
    | 'list'
    | 'list.idle'
    | 'list.fetching'
    | 'list.error'
    | {
        detail?: 'idle' | 'fetching' | 'error' | 'deleting';
        editing?: 'input' | 'editing';
        list?: 'idle' | 'fetching' | 'error';
      };
  tags: never;
}
