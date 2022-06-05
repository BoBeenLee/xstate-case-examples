import { createMachine, assign, sendParent } from "xstate";

interface Topic {
  name: string;
  isSubscribed: boolean;
}

export const pushNotificationMachine = 

/** @xstate-layout N4IgpgJg5mDOIC5QAcCusAWA5A9gFwEsAzAgYwENCcA7AWXNIwOrADoAnMciATwGIASgFEAigFUhAZQAqAfQAKQgbQCSkySoDyWRChywCVarpAAPRACYAHADZWAVnsAGGwBYA7O4CcVrwEYAZisAGhAeRABaH1Y-PydXR0CbGyCrewBfdNC0TFxCEgojekZmNmQwdgBbAlgDGlZGMFIAa2YoPggaNmYANxxmsvRsfGIySgIaYqYWVnKqmrrqBowm1uooBF6cQonqAG0nAF0TZH1DXZNzBFiLVgD7+wsPVy8g7xCwy1jWNOsA7yc7msrlcFky2SGeVGO0mDGmZQq1Vqu2WqzafAq7Bw7FmABtKERsZVZpCRgVxrCSjM5kjFqiWm1NtQ+jD9kcTmcjJdIhZHKwvBYBa4nH4LDY4vZXKFwgh7ClWK4rIqvOL-jYrFYwVkQDlhvkxkU4aVZoiFijyLjcTgAO58DkGLlIMyIOIJBVeJxWQKuUWSmzuaWIdzy0HOCwBFX2LxRrUQ3Jkg27KbGmlm+qcACOqDghHW8lNyJoHS6rC2AxJ8f1rOT1ILdMz2dguag+fmheoTJZFLZxydpwdFydV0CTjuYv9rgCFm89is90DCGDAQVvKc8Tlrhs0-c4J1pKr3ZrCLb9bAWZzbVbtN2GPYWJxyHxeEJVQreuhh6NtZPKIbF7zda7J22zdgcvZ6AONDcggET2AEfgKu4LjuEEfgJOKHwyl6dheJu-heLhnhONYu66lC5KGlSx7XvUEBgNQ-DCNIAgAJqyAAwgAEkI7EANIqFgADiChKKo6haDofacoOoBXLBcoOE48FWO4jz+vBFgLhGCH2J4KnChGgpOF4pH7h+lHwiaP71I0DLrORiY0CoRBaJIxYzGWgyVuZSZftRaZLLZaxQA5rLOa5wGsmB9rnFBQ6IG4y5xH4aQBAkcRPJhiAbvyVguBqSG+P6fimd5FG+VRVk0YFKx2SFCZhS5mhuZi2J4gSRJvqFn6Vam7b0sF3VGOFzWRaB7JSZBxjxTBPpeKwLheO4HiqbOfivAueGsFu-zuHl-hRvYfg7tqZENT1llEGAeBUlA0j9PRACC1AQAAImAPRkGA7ndMyD1dedFnGldN3THdD3UM9b0fV9Y1GNFk2xdNskuoK7gOMGgQBKqFgWClC4RDY9jbTOopPOtKpWKV77lZSl3Xbd90DJDL3vZ9pDfa1D5Pi+xJnQeQMzCDjMQ1DbOw1sUUTRBSPQb4o55SkeVHWkc0E08CvGetTiPN407hpk2rUDgdHwH2Zm03QfkcFwvAxY6KMINj6OAh6QJekh61+Or04-H4kq2I8EbeCVp0W45Vu9YBNm1cF9syc6MG8sTwbET6KGpbjmmfNc3j8sZjhuE8Fhp9TQ0VZZfV0haVrWvHcWO1tjzWGKGp5dYXgLl6CEEYq1hbrY8GuGXgMVym0dLH+TaXhP9fI4nEQpfNU54yXaGeNjaULntrj8huQRTjYPh7SPAtj9+1WsHRDFz9BsGqQta64UEryzlOC7+rcNhpz6CQivBNhT4+TpuPayNU0T2VHk5Jqkhb4zU3FYH4EY3B-1eAEOUWk0hIKBLEJCAJcZAMtkeKqAU4GO1ggRR+xlJy+HQXObOMo4g4Q1mkf0E5AihzjDTCOxDhZgyZk9VmMMOZkMTrYea0ZhQl3cOtdBuMCZ7RiGhZIaFHBpXQRkMOZUeHW1gKgAARrAUg7ACDIAdjqaSDdE6ig8IhJUJc0gyMnJ3HOmofgexVC3T0vgqZaO4dWPyoi5I7Soc-Whb8GGRHgsubwm5dICgIp4FIht0hAA */
createMachine(
    {
  context: { deviceId: '', fcmToken: '', pushPermission: false } as {
    deviceId: string;
    fcmToken: string;
    pushPermission: boolean;
  },
  tsTypes: {} as import('./push-notification-machine.typegen').Typegen0,
  schema: {
    events: {} as
      | { type: 'RETRY_CHECKING_PERMISSION' }
      | { type: 'REQUEST_PERMISSION' }
      | {
          type: 'done.invoke.pushNotificationMachine.permission.checking:invocation[0]';
          hasPermission: boolean;
          isIOS: boolean;
        }
      | {
          type: 'done.invoke.pushNotificationMachine.permission.checkingNotificationIfIOS:invocation[0]';
          status: 'grant' | 'deny' | 'default';
        }
      | {
          type: 'done.invoke.pushNotificationMachine.fetchingTokenAndDevice:invocation[0]';
          deviceId: string;
          fcmToken: string;
        }
      | {
          type: 'done.invoke.pushNotificationMachine.permission.requestingPermission:invocation[0]';
        },
  },
  initial: 'ready',
  id: 'pushNotificationMachine',
  states: {
    ready: {
      on: {
        REQUEST_PERMISSION: [
          {
            cond: 'pushPermissionIfAllowed',
            target: 'fetchingTokenAndDevice',
          },
          {
            target: 'permission',
          },
        ],
      },
    },
    permission: {
      initial: 'checking',
      states: {
        checking: {
          invoke: {
            src: 'hasPermission',
            onDone: [
              {
                cond: 'hasNotPermission',
                target: 'requestingPermission',
              },
              {
                cond: 'hasDeviceIfIOS',
                target: 'checkingNotificationIfIOS',
              },
              {
                target: 'allow',
              },
            ],
            onError: [
              {
                actions: 'showErrorMessage',
                target: 'deny',
              },
            ],
          },
        },
        allow: {
          entry: 'setAllowPermissionConext',
          type: 'final',
          always: {
            target: '#pushNotificationMachine.fetchingTokenAndDevice',
          },
        },
        requestingPermission: {
          invoke: {
            src: 'requestPermission',
            onDone: [
              {
                target: 'allow',
              },
            ],
            onError: [
              {
                target: 'deny',
              },
            ],
          },
        },
        deny: {
          entry: 'setDenyPermissionConext',
          type: 'final',
          on: {
            RETRY_CHECKING_PERMISSION: {
              target: 'checking',
            },
          },
        },
        checkingNotificationIfIOS: {
          invoke: {
            src: 'checkNotifications',
            onDone: [
              {
                cond: 'equalToGrant',
                target: 'allow',
              },
              {
                target: 'deny',
              },
            ],
            onError: [
              {
                target: 'deny',
              },
            ],
          },
        },
      },
    },
    fetchingTokenAndDevice: {
      invoke: {
        src: 'fetchTokenAndDevice',
        onDone: [
          {
            actions: 'setTokenAndDeviceContext',
            target: 'subscription',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'ready',
          },
        ],
      },
    },
    subscription: {
      entry: 'setPusnNotificationSubscription',
    },
  },
}, {
  guards: {
    pushPermissionIfAllowed: (context, event) => {
      return context.pushPermission
    },
    hasNotPermission: (context, event) => {
      return !event.hasPermission;
    },
    hasDeviceIfIOS: (context, event) => {
      return event.isIOS;
    },
    equalToGrant: (context, event) => {
      return event.status === "grant";
    },
  },
  actions: {
    setTokenAndDeviceContext: assign((context, event) => {
      return {
        deviceId: event.deviceId,
        fcmToken: event.fcmToken,
      }
    }),  
    setAllowPermissionConext: assign({
      pushPermission: (context, event) => true,
    }),
    setDenyPermissionConext: assign({
      pushPermission: (context, event) => false,
    }),
    showErrorMessage: (context, event) => {
      console.log('error');
    },
    setPusnNotificationSubscription: (context, event) => {
      console.log('setPusnNotificationSubscription');
    },
  }
});
