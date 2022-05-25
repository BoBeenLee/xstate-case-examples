import { createMachine, assign } from "xstate";


const DEFAULT_PAGE_SIZE = 10;

export const paginationMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QAcCGUCWA7VAXDA9lgLKoDGAFtmAHQYQA2YAxAMIASAggHIDiAogH1WAVQBKY-twAqggAqcBiFAVgZ8RZSAAeiAKwAGAGw0jegIwAmAOyXL58wA4AnABY9AGhABPRI8c0rkbmRqFGrg4G5gDMegC+cV5omDgaJORUWLT0TGxcfEIKAoIAygCSAFr8Wsiq6oRYWroIjtauNNGulm5tjlF91l6+CAC0nTSOZpZ6etaOetHz0QlJ6Nh4DaSU1HSMLNz8ABqyRdVIILVqaU2I7tY01s7Rlq59RtHRZuZDiNHOljQ9K1HNEQs5rEZLP5rCsLmtUpsMjsciw5JIAGplADyIhK8kUZxUVwaNwQrkWNGcBkcrmckWs1j0T08PkQ1hiDzsn2ijM+IJhiThKQ2RC2mVoADMwLhtlgoMwIERslgAG4EADWtGS6zSYp2UplmSgCGwarIIqwAG0DABdGp1a7nZqWAzOB7haIGSydWz2ZzOH4INzRQJ6SGWIwuCF6Syw7UI0VIrI0A2y+VgABOGYIGZoyAYeAlOYAtnn4Ra9cnU0aTaqCOa0ta7edLvVNE6-OZAjYjI9vRZPs4jIHzAZaaYIpNWpOh+Y4+XdUmWCI5AARTjSITSLHSTgAGWEOJk9uJ7dAzTDJgMxisZlakdpgZGNi7-hsMZc3UMkwSgqwBAgOAagXRFZWyPYTzbRoOwQKxPUBa8nBma9OieEdjABd5RxjMMqVieJBXjCslxTaU00gx1z0QJwAjCEJaQ-IJvlZUZQgmMxGT0VwDGsHlv3nYVFzAiiSRg2ZuwhPtYhiIwh1cJ9YhMYFzDuIFI09AiEiAA */
    createMachine(
        {
  context: { currentPage: 0, pageSize: DEFAULT_PAGE_SIZE, totalCount: 0 },
  tsTypes: {} as import('./pagination-machine.typegen').Typegen0,
  schema: {
    context: {} as {
      currentPage: number;
      pageSize: number;
      totalCount: number;
    },
  },
  on: {
    UPDATE_TOTAL_COUNT: [
      {
        actions: 'setPaginationContext',
        cond: 'currentPageIsNotAboveNewTotalPages',
        target: '.idle',
      },
      {
        target: '.fetching',
      },
    ],
  },
  initial: 'fetching',
  id: 'paginationMachine',
  states: {
    idle: {
      on: {
        CHANGE_CURRENT_PAGE: [
          {
            actions: 'setPaginationContext',
            cond: 'currentPageIsBelowTotalPages',
            target: 'fetching',
          },
          {
            actions: 'showErrorMessage',
          },
        ],
        CHANGE_PAGE_SIZE: {
          actions: 'setPaginationContext',
          target: 'fetching',
        },
        NEXT_PAGE: [
          {
            actions: 'setPaginationContext',
            cond: 'currentPageIsNotAboveTotalPages',
            target: 'fetching',
          },
          {
            actions: 'showErrorMessage',
          },
        ],
        PREVIOUS_PAGE: [
          {
            actions: 'setPaginationContext',
            cond: 'currentPageIsEqualToOrAboveThanZero',
            target: 'fetching',
          },
          {
            actions: 'showErrorMessage',
          },
        ],
      },
    },
    fetching: {
      invoke: {
        src: 'getPaginationByPage',
        onDone: [
          {
            actions: 'updatePaginations',
            target: 'idle',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'idle',
          },
        ],
      },
    },
  },
});