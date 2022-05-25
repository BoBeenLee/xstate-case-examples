import { createMachine, assign } from "xstate";


const DEFAULT_PAGE_SIZE = 10;

export const paginationMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QAcCGUCWA7VAXDA9lgLKoDGAFtmAHQCSEANmAMQDCAEgIIByA4gFEA+mwCqAJXECeAFSEAFLoMQoCsDPiIqQAD0QAWAOwAGGgGYATAE4AbFYAch-WZeGrZgDQgAnoitWaCwszY0MbAFZ9cONjfX0bAF8ErzRMHE0SciosWgZmdm5+YUVBIQBlOgAtAW1kNQ1CLG09BDt9GlCrQzN9C3sowwBGKy9fBABaHpp7CKCrXv1YqySU9Gw8RtJKahoAMTBcbawoFggiWmwANwIAa1pU9Yyt7Np9w+yoBCuCMg2iAG1jABdWr1DLNRAhUwWRZOYyDcI9GyDQyjRAWQamaL2CzwwY2IxWcLuFYgB7pTZZHZvI4nMAAJ3pBHpNGQjDwADNmQBbVlrClEZ7Ug60r5Ya6-DKAkFIMlgxoQhCDQZmQIOEx2XH2EKGVE+SEWGyBBGzEwq5XhQxJZIgLAECBwWr8v6ZI65JhgUHqcGylrdQY0KLhezBmw2WIRfRohBmYY0ExdRZa8KG4yJG3kl1CnJ7EUfL0NLS+xCDez2Ghh5EEol9eKDaPjMPTCKGcKRUJmVvGeykzNPKk5As+0AtewBayONNWLU6vVjcYqgIzZXh7rGMzhFFW61AA */
    createMachine(
        {
  context: { currentPage: 0, pageSize: DEFAULT_PAGE_SIZE },
  tsTypes: {} as import('./pagination-machine.typegen').Typegen0,
  initial: 'Fetching',
  id: 'paginationMachine',
  states: {
    Idle: {
      on: {
        CHANGE_CURRENT_PAGE: {
          target: 'Fetching',
        },
        CHANGE_PAGE_SIZE: {
          target: 'Fetching',
        },
      },
    },
    Fetching: {
      invoke: {
        src: 'getPaginationByPage',
        onDone: [
          {
            actions: 'setPaginationContext',
            target: 'Idle',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'Idle',
          },
        ],
      },
    },
  },
});