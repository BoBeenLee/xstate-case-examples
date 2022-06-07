// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    showErrorMessageContext:
      | 'error.platform.phoneVerficationMachine.verifying:invocation[0]'
      | 'xstate.after(60000)#phoneVerficationMachine.verifying'
      | 'error.platform.phoneVerficationMachine.submitting:invocation[0]';
  };
  internalEvents: {
    'error.platform.phoneVerficationMachine.verifying:invocation[0]': {
      type: 'error.platform.phoneVerficationMachine.verifying:invocation[0]';
      data: unknown;
    };
    'xstate.after(60000)#phoneVerficationMachine.verifying': {
      type: 'xstate.after(60000)#phoneVerficationMachine.verifying';
    };
    'error.platform.phoneVerficationMachine.submitting:invocation[0]': {
      type: 'error.platform.phoneVerficationMachine.submitting:invocation[0]';
      data: unknown;
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    sendSMS: 'done.invoke.phoneVerficationMachine.verifying:invocation[0]';
    confirmSMSCode: 'done.invoke.phoneVerficationMachine.submitting:invocation[0]';
  };
  missingImplementations: {
    actions: 'showErrorMessageContext';
    services: 'sendSMS' | 'confirmSMSCode';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    sendSMS:
      | 'SEND_SMS'
      | 'RESEND_SMS'
      | 'error.platform.phoneVerficationMachine.submitting:invocation[0]';
    confirmSMSCode: 'SEND_SMS_CODE';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: 'ready' | 'verifying' | 'timeout' | 'verified' | 'submitting';
  tags: never;
}
