// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    showErrorMessage:
      | 'error.platform.pushNotificationMachine.permission.checking:invocation[0]'
      | 'error.platform.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
    setTokenAndDeviceContext: 'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
    setAllowPermissionConext:
      | 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]'
      | 'done.invoke.pushNotificationMachine.permission.requestingPermission:invocation[0]'
      | 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
    setDenyPermissionConext:
      | 'error.platform.pushNotificationMachine.permission.checking:invocation[0]'
      | 'error.platform.pushNotificationMachine.permission.requestingPermission:invocation[0]'
      | 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]'
      | 'error.platform.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
    setPusnNotificationSubscription: 'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
  };
  internalEvents: {
    'error.platform.pushNotificationMachine.permission.checking:invocation[0]': {
      type: 'error.platform.pushNotificationMachine.permission.checking:invocation[0]';
      data: unknown;
    };
    'error.platform.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]': {
      type: 'error.platform.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
      data: unknown;
    };
    'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]': {
      type: 'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.pushNotificationMachine.permission.checking:invocation[0]': {
      type: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.pushNotificationMachine.permission.requestingPermission:invocation[0]': {
      type: 'done.invoke.pushNotificationMachine.permission.requestingPermission:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]': {
      type: 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.pushNotificationMachine.permission.requestingPermission:invocation[0]': {
      type: 'error.platform.pushNotificationMachine.permission.requestingPermission:invocation[0]';
      data: unknown;
    };
    'error.platform.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]': {
      type: 'error.platform.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
      data: unknown;
    };
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    hasPermission: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
    requestPermission: 'done.invoke.pushNotificationMachine.permission.requestingPermission:invocation[0]';
    checkNotifications: 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
    fetchTokenAndDevice: 'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services:
      | 'fetchTokenAndDevice'
      | 'hasPermission'
      | 'requestPermission'
      | 'checkNotifications';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchTokenAndDevice: 'REQUEST_PERMISSION' | '';
    hasPermission: 'RETRY_CHECKING_PERMISSION';
    requestPermission: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
    checkNotifications: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
  };
  eventsCausingGuards: {
    pushPermissionIfAllowed: 'REQUEST_PERMISSION';
    hasNotPermission: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
    hasDeviceIfIOS: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
    equalToGrant: 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'ready'
    | 'permission'
    | 'permission.checking'
    | 'permission.allow'
    | 'permission.requestingPermission'
    | 'permission.deny'
    | 'permission.checkingNotificationIfIOS'
    | 'fetchingTokenAndDevice'
    | 'subscription'
    | {
        permission?:
          | 'checking'
          | 'allow'
          | 'requestingPermission'
          | 'deny'
          | 'checkingNotificationIfIOS';
      };
  tags: never;
}
