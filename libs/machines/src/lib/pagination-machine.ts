import { createMachine, assign } from "xstate";


const DEFAULT_PAGE_SIZE = 10;

export const paginationMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QAcCGUCWA7VAXDA9lgLKoDGAFtmAHQYQA2YAxAMIASAggHIDiAogH1WAVQBKY-twAqggAqcBiFAVgZ8RZSAAeiAKwAGAGw0jegIwAmAOyXL58wA4AnABY9AGhABPRI8c0rkbmRqFGrg4G5gDMegC+cV5omDgaJORUWLT0TGxcfEIKAoIAygCSAFr8Wsiq6oRYWroILtE05s5RetHRRo69-V6+CCZBVq497gYGeq7OzglJ6Nh4DaSU1HSMLNz8ABqyRdVIILVqaU2I7tY01s7Rlq6Oxj1m5kOI0c6WNHqO1v0Qs5rEZLP5rItTstUmsMpsciw5JIAGplADyIhK8kUxxU5walwQEwCnUcc0i1msenunh8iGsMVudl60SpA1ZkOSKzS60ytAAZmBcBssFBmBAiNksAA3AgAa1oXJhRF5m0FwsyUAQ2FlZFWRAA2gYALo1OoXE7NSwGZy3cLRAyWaKuWz2eYfBBuNruUGWPrAsyWTnQ-XpEUCoUisVgABOMYIMZoyAYeH5CYAtkmQzy4VkaOqo9qZQQ9WkjaaTmd6ppLX5zIEbEY7k6LL1nEYPeYDHNTBFHH1rH32+ZgylQ6qsswRHIACKcaRCaRo6ScAAywgxMjN+JroGaelCNGmwT9fxBZOcHoAtDZ6-4bHowd9nIZ+wlEiAsAQIHAatnYeGWxMNu1aNLWCBWA6vzTE4eiGAYzr3J2xg-EY0Rdo+B6dLE8Qfkq465hGGrYFAIEWnuiBOAEYQhHMj5ksE16Hv2ehUrMBjWKyr6jtyAF8mRBLgaxDYgs2sQxEY7auNesQmP8jgxI+NixH60TvnEQA */
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
        actions: ['setPaginationContext', 'goToFirstPage'],
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