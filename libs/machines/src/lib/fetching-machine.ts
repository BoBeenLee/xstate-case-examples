import { createMachine, assign } from "xstate";

export const fetchingMachine =
  
/** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAlgOygFkBDbfMAOgEkIAbMAYgDEBRAFQGEAJRUABwD2sHGhwC8vEAA9EARgBsAVgqKAzItkAWABzaAnPNXz5AdgA0IAJ6IATApWr1NxYu2y3ezYoC+3i6kxcAhIyPEomdFCoBghxSnwANwEAa0oAqJCg8MigqAREgQxiUXEAbQAGAF1JQWESiSRpOSUHDR19Q2NzKzkbPRV5cvkvEzcjE2Hffxz8IlIsigjA2YYwACc1gTWKPlpi5C2AWwp03MzyRZmCfLwkovqK6sbakTEG0BkERRNlV1U9Ewmcp2IzGCzWBCyPQ2Ch6b6mPTaTTlLwuExTECnWbnMKXZYEBhSWBoYqUYjINDrAAUinK5QAlAwscF5hcllEakJXuJJJ9vr9tP9AcDZKD5ODEAZYUi9ADtIobCZ-rIMcy5qFKAB1YivAgAAgARmADmswHrTWg1pZCcTSRRyZS1lSAErsZ0ATQA+gARFgAGQAgu7GWqcVqdaJ9UaTWaLVbOXU3rzEN9+opNBnVNo6YpoYiJZCM7CTKKdOUs4Z9DZfH4QHgBBA4JJQ6zcTR6Anue8mghNDYCzY6RQgaoUdnVFCS-JVVd1Qt2blO-VkwhVJp5BQ7DmhhptDZxT1IfJ+nZaV4bP8XFDVDP8XOLtrdVBDcatrH0PHnlzl41PoDVBQmjqJocL-HCxh6AOooUPIshAsCQHqPIF7TrWLYahQbA4IckB6gIACuaBLkmv6IP+gHAaBsqKBBBZ6OU0rpjohgormji3hkrZgMRPKkZC2gFu4NbeEAA */
createMachine(
    {
  context: { errorCount: 0 } as { errorCount: number },
  tsTypes: {} as import('./fetching-machine.typegen').Typegen0,
  initial: 'Idle',
  id: 'fetchingMachine',
  states: {
    Idle: {
      on: {
        FETCH: {
          target: 'Fetching',
        },
      },
    },
    Fetching: {
      invoke: {
        src: 'makeFetch',
        onDone: [
          {
            actions: 'resetErrorCount',
            target: 'Idle',
          },
        ],
        onError: [
          {
            actions: ['showErrorMessage', 'incrementErrorCount'],
            target: 'Waiting before retry',
          },
        ],
      },
      after: {
        '500': {
          target: 'Timed out',
        },
      },
    },
    'Waiting before retry': {
      after: {
        RETRY_DELAY: {
          target: 'Fetching',
        },
      },
    },
    'Timed out': {},
  },
}, {
  actions: {
    resetErrorCount: assign(() => {
      return {
        errorCount: 0
      }
    }),
    incrementErrorCount: assign((context) => {
      return {
        errorCount: context.errorCount + 1
      }
    })
  },
  delays: {
    RETRY_DELAY: (context) => {
      const exponent = context.errorCount ** 2;
      return exponent * 200;
    }
  }
}
  );
