import { createMachine, assign } from "xstate";


const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_TOTAL_COUNT = 101;

export const paginationMachine =
    
/** @xstate-layout N4IgpgJg5mDOIC5QAcCGUCWA7VAXDA9lgLKoDGAFtmAHQYQA2YAxAKoAKAIgIIAqAogH0AwqwBKY-gDleg9twDi-RCgKwM+IipAAPRABYA7AAYaANgCcADgDMNs4asX9VgExmArABoQAT0Q2HgCM5jZWVh42+q5BVkFhHgC+iT5omDiaJORUWLT0TGxcfELySoIAygCSAFrKSCDIahqEWNp6CG5WNBYJFobB7mY2Pv4I0RY0rvYOrrM2hjZBHkkpDejYeC2klNR0jCxS-AAasqV1quqZbYgAtK76+jQe+mbGQ28vy2b6I4huht1Au9lv0zLZkql1hkttldvkWOxJAA1SoAeVY5TkinODSaV3q7RuHgBFiChlchleA1sxkMvwQkQ8NDexhsFgpZiCtNcVgha3SmyI2xytAAZmBcDssFBmBAiHksAA3AgAa1oaQ2mWFu3FkpyUAQ2GVZEFWAA2sYALraRqXFrXBA3B4TV5WFwOOwWPquelBIKc0IWTzGYxWYxBHoWPka6FC2G5Gi6qUysAAJ1TBFTNGQDDwoszAFts1DTdqE0n9YalQQTZkLdb6rbmloCbcFhMbDEghyXAtHL7jMsaAt7K5It2lvpoyWtfGWBweAJBLxUbxuAAZETomQ2vH21tjH1+RBDcxmKazL1hl5WfrJVZYAgQOA2mcwqV5fa7u0t0DtLnuMO3aumCnJsr6SxMvosRuMYFK0tE04CrOH6JhKybfs2rQHk6YLdM8+hwXBHiDkY9JsiEDhvE41j2HB9xIZq74iph+J-m2p6dn6Pa3vMVj0ncIR2DYxgWIOrycsY+g2PeiRAA */
createMachine(
        {
  context: { currentPage: 0, pageSize: DEFAULT_PAGE_SIZE, totalCount: DEFAULT_TOTAL_COUNT },
  tsTypes: {} as import('./pagination-machine.typegen').Typegen0,
  schema: {
    context: {} as {
      currentPage: number;
      pageSize: number;
      totalCount: number;
    },
    events: {} as
      | {
          type: 'UPDATE_TOTAL_COUNT';
          totalCount: number;
        }
      | {
          type: 'UPDATE_PAGE_SIZE';
          pageSize: number;
        }
      | {
          type: 'UPDATE_CURRENT_PAGE';
          currentPage: number;
        }
      | {
          type: 'NEXT_PAGE';
        }
      | {
          type: 'PREVIOUS_PAGE';
        },
    services: {} as {
      getPaginationByPage: {
        // The data that gets returned from the service
        data: { id: string };
      };
    },
  },
  on: {
    UPDATE_TOTAL_COUNT: [
      {
        actions: 'setTotalCountContext',
        cond: 'currentPageIsNotAboveNewTotalPages',
        target: '.idle',
      },
      {
        actions: ['setTotalCountContext', 'goToFirstPage'],
        target: '.fetching',
      },
    ],
  },
  initial: 'fetching',
  id: 'paginationMachine',
  states: {
    idle: {
      on: {
        UPDATE_CURRENT_PAGE: [
          {
            actions: 'setCurrentPageContext',
            cond: 'currentPageIsBelowTotalPages',
            target: 'fetching',
          },
          {
            actions: 'showErrorMessage',
          },
        ],
        UPDATE_PAGE_SIZE: {
          actions: 'setCurrentPageSizeContext',
          target: 'fetching',
        },
        NEXT_PAGE: [
          {
            actions: 'setNextPageContext',
            cond: 'canGoToNextPage',
            target: 'fetching',
          },
          {
            actions: 'showErrorMessage',
          },
        ],
        PREVIOUS_PAGE: [
          {
            actions: 'setPreviousPageContext',
            cond: 'canGoToPreviousPage',
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
}, {
  actions: {
    goToFirstPage: assign({
      currentPage: (context, event) => 0,
    }),
    setCurrentPageContext: assign({
      currentPage: (context, event) => event.currentPage,
    }),
    setCurrentPageSizeContext: assign({
      pageSize: (context, event) => event.pageSize,
    }),
    setNextPageContext: assign({
      currentPage: (context, event) => context.currentPage + 1,
    }),
    setPreviousPageContext: assign({
      currentPage: (context, event) => context.currentPage - 1,
    }),
    setTotalCountContext: assign({
      totalCount: (context, event) => event.totalCount,
    }),
    showErrorMessage: (context, event) => {
      // TODO
    },
  },
  guards: {
    currentPageIsBelowTotalPages: (context, event) => {
      return context.currentPage < Math.ceil(context.totalCount / context.pageSize);
    },
    currentPageIsNotAboveNewTotalPages: (context, event) => {
      return context.currentPage < Math.ceil(event.totalCount / context.pageSize);
    },
    canGoToNextPage: (context, event) => {
      return context.currentPage < Math.ceil(context.totalCount / context.pageSize);
    },
    canGoToPreviousPage: (context, event) => {
      return context.currentPage > 0;
    }
  },
  services: {
    getPaginationByPage: async () => {
      return {
        id: '1',
      }
    },
  }
});