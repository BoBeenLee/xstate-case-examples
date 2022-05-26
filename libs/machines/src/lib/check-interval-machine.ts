import { createMachine, assign, sendParent } from "xstate";

export const checkIntervalMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QGMAWZkGsCSA7ALmAE4BuAhgDYCyZaAlrmAHTkV0Rn50D2uAxAA9Y+TszIAzQkQAUAZgAMigJR80GHAWKsa9Ri0rtOPXIlAAHbrDpdepkAMQAWRwA4mARheOAnLIBMLgCsfgDsId6OIQA0IACeiO7OTN5hQbKygQBsgYEuAL55MWpYeFLatKgMzMWYDFB8ELzMDCTcmNXoJZqklDqVejV1CC3cyEa8ANryALp2FlY2Jkj2TvJ+TJne8u7umfKZLvveMfEI7t7r3nu+N7I+8i6yBUWdGmW9FVVMg7j1xETcIhMMwUTjiQEAW2+r1KWg+ug66iGIzGiyms2W82sxjsDgQjjWGy2Oz2ByOJ0QV2SEUOmUyfiyfj88iehRANVhPWon0YfAASgBRABigoAygAJOaWbG2ZZ4xx+ClnJIpEIuEIKeTeHKZRyBAps3DcCBwOwc7rlBH6NgcRZShY4uWIPayDzeRIBWSHRzubZK9zhDYMzwhQLuXJa9zPdkwi3w-qIrB1e0ypagPG7V2RNWh1wuIJhTL+9xZlx+AlbNUuc6yTLR83vblWloGW2O8zSu1OhAut0ex7e33uJVbakPDU5dWhEJRtkNuFNhMprvphIuJWZJiKbc73chA15IA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import('./check-interval-machine.typegen').Typegen0,
  on: {
    REFRESH: {
      target: '.checking',
    },
  },
  initial: 'checking',
  states: {
    validation: {
      after: {
        '3000': {
          target: 'checking',
        },
      },
    },
    checking: {
      invoke: {
        src: 'checkProcess',
        onDone: [
          {
            target: 'validation',
          },
        ],
        onError: [
          {
            target: 'invalidation',
          },
        ],
      },
    },
    invalidation: {},
  },
  id: 'checkIntervalMachine',
});
