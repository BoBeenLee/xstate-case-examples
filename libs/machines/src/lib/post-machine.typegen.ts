// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {};
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPost: 'done.invoke.postMachine.detail.fetching:invocation[0]';
    deletePost: 'done.invoke.postMachine.detail.deleting:invocation[0]';
    upsertPost: 'done.invoke.postMachine.editing.editing:invocation[0]';
    getPosts: 'done.invoke.postMachine.list.fetching:invocation[0]';
  };
  missingImplementations: {
    actions: never;
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
