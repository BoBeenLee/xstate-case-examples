import { createMachine, assign } from "xstate";


const DEFAULT_PAGE_SIZE = 10;

export const paginationMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QAcCGUCWA7VAXDA9lgLKoDGAFtmAHQYQA2YAxAMIASAggHIDiAogH1WAVQBKY-twAqggAqcBiFAVgZ8RZSAAeiABwAGAKw0AzEYCcAFgBsNgIz3Tpi-YBMAGhABPRPZPGBm4A7G42oeFGem5WAL6xXmiYOBok5FRYtPRMbFx8QgoCggDKAJIAWvxayKrqhFhaugiOpno0wVHGURbRpsHBXr4IALTONEbuFjYGpvZ6FsGmtvGJ6Nh49aSU1HSMLNz8ABqyhVVIIDVqqY2IDm32wQbB9lZLE3o2g36tNHZ69hYwq0bEZpnoVhc1ilNukdtkWHJJAA1UoAeRExXkijOKiu9RuCCMYRoAP6Vi6gI6pi+CDcelMJMW5gW5jcBhmEKS61SWwytAAZmBcNssFBmBAiFksAA3AgAa1oXOhRF5O0FwoyUAQ2FlZA2RAA2gYALrVWrXc5NZxtAx2R5BKxOCxvGm2NpEixGPp6ckvD6cqH6tIigVCkVisAAJ0jBEjNGQDDw-NjAFt44GebDMjR1eHtTKCHrUkbTedLnVNJbEGyLO1TOz+pN6z7qT5EEZglZ2v4HlMW4DwQlIckg6rMswRHIACKcaRCaSo6ScAAywnRMjNeMroCaoJsNHZDjCUWCNh9FhpwxC9hoemiHTpgM9Bn9EKwBAgcGqGZhId2TE3CsGirBALE9GgQhsY8AWtGxWyGaY3Agj4ojcfx60dUwAxHTM-1zTVAItHc-DvX47HsGwrE9OlbHsS87FvEEOiMclFg6F9sO5X8+UI-EQIors7AcSjqJ9BxL3Mfc9GCf4rFeF9rFBeJ4iAA */
    createMachine(
        {
  context: { currentPage: 0, pageSize: DEFAULT_PAGE_SIZE, totalCount: 0 },
  tsTypes: {} as import('./pagination-machine.typegen').Typegen0,
  on: {
    UPDATE_TOTAL_COUNT: [
      {
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
        CHANGE_CURRENT_PAGE: {
          cond: 'currentPageIsBelowTotalPages',
          target: 'fetching',
        },
        CHANGE_PAGE_SIZE: {
          target: 'fetching',
        },
        NEXT_PAGE: {
          cond: 'currentPageIsNotAboveTotalPages',
          target: 'fetching',
        },
        PREVIOUS_PAGE: {
          cond: 'currentPageIsEqualToOrAboveThanZero',
          target: 'fetching',
        },
      },
    },
    fetching: {
      invoke: {
        src: 'getPaginationByPage',
        onDone: [
          {
            actions: 'setPaginationContext',
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