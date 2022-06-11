import { createMachine, assign, sendParent } from "xstate";

export const phoneVerificationMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcAWB7AdmAamATgGYCWAxgIYAuxWAsuaasdgHT5jkQCeAxAMoBRAHIARAPp9afRCnSxi1LDJAAPRAEYAHAE4WAFgDsBgEwAGYwFY9ezadMmANCC6JjlltusA2C5oOb1dVMtCwBfUKc0LFwCEgpFTHpGZjAWADcCYkIuZigeCGiWZjT0AGtUqOw8IjIqGkSGJlYM-CyczCgEYvR4+oBtUwBdZWQ5BXrlNQQ9C1MPUy9-dT1tC21tYy8nFwRl9X1Fgy9jr0N-AGZwyIwq2NqEpKbUlrbcngJ8dHwWZAAbKkIXwAtj8bjEar06I0UulMtlcl1MCVIZgBsMkCBRvIEpMNDp9EYzJZrLZ7BZtq4DOcPOdTOtNr4jOsrpiwdU4nUoclmnD2nlBKIJFIxABhADyIgEIzGOIxU1Oc0sqxmmkspy82gpCGM1hYxhMFkW6ipa2OmhZlXBHIe0J5rXhHR4KlglCoqXIhEoBAAFF47HYAJQ8S3s+71R4wl4OqDS7ETOV43RnIlWGx2RzORDaObaTRWKzndSbVXqC1su4oiOsahAsDoACulB4ACUBALxJJpBiseMlAndvjk+ZU6SMztjQYPL5zjrs+c9MZzkYy9FQ5XbalYPWAEZAhTUR0FVjdcqg1cVzkNbmbnd7ygHzrdFFo2O9zC43bqQssKmaGzqLw3AsIwtkzbVjE0fRvEZAIghCFdbghS8qxvXd9zeD4vh+f5KEBfAQRDC8bWvFgtzQ+8ESfS8X27GV41AeU9EVNZ81VQ09A1LV1GAvV1g1exggsNwjnCCIQEwdAIDgEZyyQ4injYDhuFfWUGMQQ0WHOc4NlMCxZi8c5gPOLUILmOkl20Y4ONsQCwjEwi5PDDdYXtPkVPo1RED0b89JMAz1G0IsAPJMCAr0fQrCCXSFxmU4EKtMMuQUms60bdy+zU6ZjC4wCWCLC4-WMbRzkWLT4rXZDnKjYhIHS99+y-HjvNVP8-D0wxsrAtxjCgiwotMLTioggxyqIpySLIu8Hzqj8-B6wbAPWbQqUCkLx0sqc9CiqwdXY0bHKSlIZoazQuMnJaLsu5bRNCIA */
  createMachine(
    {
  context: {},
  tsTypes: {} as import('./phone-verification-machine.typegen').Typegen0,
  schema: {},
  initial: 'ready',
  id: 'phoneVerficationMachine',
  states: {
    ready: {
      on: {
        SEND_SMS: {
          target: 'verifying',
        },
      },
    },
    verifying: {
      invoke: {
        src: 'sendSMS',
        onDone: [{}],
        onError: [
          {
            actions: 'showErrorMessageContext',
            target: 'ready',
          },
        ],
      },
      after: {
        '60000': {
          actions: 'showErrorMessageContext',
          target: 'timeout',
        },
      },
      on: {
        SEND_SMS_CODE: {
          target: 'submitting',
        },
      },
    },
    timeout: {
      on: {
        RESEND_SMS: {
          target: 'verifying',
        },
      },
    },
    verified: {},
    submitting: {
      invoke: {
        src: 'confirmSMSCode',
        onDone: [
          {
            target: 'verified',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessageContext',
            target: 'verifying',
          },
        ],
      },
    },
  },
}
  );
