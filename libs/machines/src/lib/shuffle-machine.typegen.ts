// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    setPlayingContext: 'SELECT';
    setPlayingStatus: 'PLAY';
    setPauseStatus: 'PAUSE';
    nextShufflePlayingContext: 'NEXT';
  };
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions:
      | 'setPlayingContext'
      | 'setPlayingStatus'
      | 'setPauseStatus'
      | 'nextShufflePlayingContext';
    services: never;
    guards: 'IsShuffleModeAndHasNextPlaying';
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    IsShuffleModeAndHasNextPlaying: 'NEXT';
  };
  eventsCausingDelays: {};
  matchesStates: 'pause' | 'playing';
  tags: never;
}
