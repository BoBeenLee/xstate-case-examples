// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {};
  internalEvents: {
    'done.invoke.checkIntervalMachine.checking:invocation[0]': {
      type: 'done.invoke.checkIntervalMachine.checking:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.after(3000)#checkIntervalMachine.validation': {
      type: 'xstate.after(3000)#checkIntervalMachine.validation';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    checkProcess: 'done.invoke.checkIntervalMachine.checking:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services: 'checkProcess';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    checkProcess:
      | 'REFRESH'
      | 'xstate.after(3000)#checkIntervalMachine.validation';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: 'validation' | 'checking' | 'invalidation';
  tags: never;
}
