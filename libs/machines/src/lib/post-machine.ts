import { createMachine, assign, sendParent } from "xstate";
import produce from "immer";

interface PostItem {
  id: string;
  content: string;
}

export const postMachine =

  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoIwMciAbcoiOsAYgDEBRAFQGEAJAPoAFAPIBlbohToiGIqhLSQAD0QBGTQHZyAJgAcANgCshgMwBOAAzGzAFi1mANCACeiM+sPkLWrYf07Ky11XXV9C0MAXyiXNExcQlIKKhp6RmY2ADkAQQA1AEkAcRzuTkFuUUFOABEC7gKsouV4uQUlJFUNXV0LcnD1K319LTsgi3VjF3cEY31jcjt9MzNTW0MLa2jYkHjsfGIySmpaBiYWVhrOABkecrFJFtl5RWU1BHVLb19xu0MtCxmLSmaaIXSmRaGIZ+UJ2T7bOLofZJI6pU7kABm1BRUFYEEUFFIADdUABrCh7RKHFIndJYjA4hDE1B4HAvEgAbSsAF0nrA2q9Ou9NFZ1HoxtYLLorOY5rpQQgzIY7D4oTCzDLVlpdDFEQkDsljmkGPScawwAAnC2oC3kZB0NkYm0AWztSKphrRdOxhygTJIJNZ7K5vM6rXZbw0gzFuglVilmrlCt0AR8Fjsxkiyyh+mCxl1u3dBtRtIYlutFtYACUeFWAJoiCRSMPPdqRj6hKz9LQy3PqCzLOwWZNhciiybxqHxuwpnU7SnFmnG44seQkXH4o7M8lu-Uopfoqir0h+5lB9ohvkCjqgYVzPomTxmAwOIGOBUBLsz4xWOEhdRLMYdgFgu+5GoeYDHuu5pWjadoOhgToWq6oHUuB6RHtQJ7+oGbIXjyV4RkKGhfD4ozTv8gLAoYyZDIsfhaBEwwRL4+hznqyJoV6dCsLkhQlGUFRVNcBSPC2-JEbeYLRuQ5gJkYPT9kqCqrAsqyeJE-xhAOwQgUWYGQG066MCQyAAK4YKwtT1IRbbEQgmmyUMgSjPo-bGH4CqDL0PhWM+gIZn4fl6XuaGGWuUDkOFJ54gSJkkjuqGGtFxkpaeAYsnhiiXuJ17tpohi6IsvQMaMYxePKbiIIx3gpgC5W5j+v4hZxyUQEZkVpTBFbwY6Lq7q1RxpVF7URThmXBgRuWSV0DmGN4OYuUs7meVVDluT40rSoVPSmH8LUekNo0xXxxSlOUlSCCJYkyBJdlSR8GZij2cLhFYvRmEYCq+LVtijB5cLMQdi4jR1vH5GdgmXVc3A5AU1y2YKD2bGpQ7xtqdiWCE+gfnRoTGOEhiaB56jasDYF0EQmAZBcXB8EIDzcOIiM3rNYSk3oRgDoxAGY1oCrzH0Rg2LmH2BPG5NoZT1PnNkEMCRdVQw3DCPTfdbO6Cs5CWLo-gBDtmPJhtIRQuEmuikMmOS4a0sYJiPoxZuhIZYl+lS1Tdumr643ntlU23Xl9lhH55DZn8jGrICONrdYOiBEq-zGAYvhStbRy2-bDK+t1cH2n1yEDYdFAZ172FnllnL+4Wd1I2zgxmKHSrh8smafQLmih34Q4anMPYpmnxce1FsGVjW3D1o2kjM2rtfvGE0r9MqROZl4GbDmt-gNxEYwi5re35gWJCoFQ8DiYNB7pLLLP5SmDemBMn1hJj-z82tQJitosYrDKfjzAP6Emgduua+9lhgLHemVfwoR7AeRUgvSItgVjGFMDKQm-9uLDwrCAh6oRzDkHvp8NiAElSrRmOCBYJhmIzjCKYbUZh0GlhXFhYBM9WZ3m1HoRwmYrDQgiDKWifR4RxgiECTWDDjTYNmkYMUECxhQM1oFLyqxFhGAiJmTWA5NjsWrufUGEUTLmQwJI942Y9AeXBC-L+pNvrLHFG5MIGN4yxn-sNNKxiowznwQODMv5-AODmN9VMwIgTKlFF8RwLjjosIDjNExoQzHaloRjTwr8ZhqPIP4Aw5iUxyIPhxIu5AM5X1Ye2HoHDNDQM2O9SI-hvoATHDwz4Fgk7ph4cBecbsbZD1LtE6ugccHDC7G5ZBmwMw7yAgLPBgQ2IlRqssLQ-8M7lhtO4hAZSioVI0dYXo-waIbwHPgv8uYxiAwsIsj2qzwgQmGZmdMQEggTLWhsLs1h7BVKVL+IcA9VmMX0AkixfgrGpMQIVRYkRRRQiAp9EY9CYhRCAA */
  createMachine(
    {
      context: { posts: {} },
      tsTypes: {} as import('./post-machine.typegen').Typegen0,
      schema: {
        context: {} as { posts: Record<string, PostItem> },
        events: {} as {
          type: "done.invoke.postMachine.detail.deleting:invocation[0]";
          id: string;
        } | {
          type: "done.invoke.postMachine.detail.fetching:invocation[0]"
          post: PostItem;
        } | {
          type: "done.invoke.postMachine.editing.editing:invocation[0]";
          post: PostItem;
        } | {
          type: "done.invoke.postMachine.list.fetching:invocation[0]";
          posts: PostItem[];
        } | {
          type: "FETCH_POST"
        } | {
          type: "NAVIGATE_TO_EDITING"
        } | {
          type: "DELETE_POST"
        } | {
          type: "RETRY_POST"
        } | {
          type: "NAVIGATE_TO_LIST"
        } | {
          type: "EDIT"
        } | {
          type: "NAVIGATE_TO_DETAIL"
        } | {
          type: "FETCH_POSTS"
        } | {
          type: "RETRY_POSTS"
        }
      },
      initial: 'list',
      states: {
        detail: {
          initial: 'fetching',
          states: {
            idle: {
              on: {
                FETCH_POST: {
                  target: 'fetching',
                },
                NAVIGATE_TO_EDITING: {
                  target: '#postMachine.editing',
                },
                DELETE_POST: {
                  target: 'deleting',
                },
              },
            },
            fetching: {
              invoke: {
                src: 'getPost',
                onDone: [
                  {
                    actions: 'setPostContext',
                    target: 'idle',
                  },
                ],
                onError: [
                  {
                    target: 'error',
                  },
                ],
              },
            },
            error: {
              on: {
                RETRY_POST: {
                  target: 'fetching',
                },
              },
            },
            deleting: {
              invoke: {
                src: 'deletePost',
                onDone: [
                  {
                    actions: 'deletePostContext',
                    target: '#postMachine.list',
                  },
                ],
                onError: [
                  {
                    target: 'idle',
                  },
                ],
              },
            },
          },
          on: {
            NAVIGATE_TO_LIST: {
              target: 'list',
            },
          },
        },
        editing: {
          initial: 'input',
          states: {
            input: {
              on: {
                EDIT: {
                  target: 'editing',
                },
              },
            },
            editing: {
              invoke: {
                src: 'upsertPost',
                onDone: [
                  {
                    actions: 'setPostContext',
                    target: '#postMachine.list',
                  },
                ],
                onError: [
                  {
                    target: 'input',
                  },
                ],
              },
            },
          },
          on: {
            NAVIGATE_TO_LIST: {
              target: 'list',
            },
            NAVIGATE_TO_DETAIL: {
              target: 'detail',
            },
          },
        },
        list: {
          initial: 'fetching',
          states: {
            idle: {
              on: {
                FETCH_POSTS: {
                  target: 'fetching',
                },
                NAVIGATE_TO_DETAIL: {
                  target: '#postMachine.detail',
                },
              },
            },
            fetching: {
              invoke: {
                src: 'getPosts',
                onDone: [
                  {
                    actions: 'setPostsContext',
                    target: 'idle',
                  },
                ],
                onError: [
                  {
                    target: 'error',
                  },
                ],
              },
            },
            error: {
              on: {
                RETRY_POSTS: {
                  target: 'fetching',
                },
              },
            },
          },
        },
      },
      id: 'postMachine',
    }, {
    actions: {
      "deletePostContext": assign((ctx, event) => {
        return {
          posts: produce(ctx.posts, draftState => {
            delete draftState[event.id];
          }),
        }
      }),
      "setPostContext": assign((ctx, event) => {
        return {
          posts: produce(ctx.posts, draftState => {
            const post = event.post;
            draftState[post.id] = post;
          }),
        }
      }),
      "setPostsContext": assign((ctx, event) => {
        return {
          posts: produce(ctx.posts, draftState => {
            event.posts.forEach(post => {
              draftState[post.id] = post;
            });
          }),
        }
      }),
    }
  });
