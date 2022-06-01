// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setProgress: 'PROGRESS';
  };
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    uploadFile: 'done.invoke.fileUploadMachine.Uploading:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    uploadFile: 'UPLOAD' | 'RETRY';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: 'Uploading' | 'Idle' | 'Error';
  tags: never;
}
