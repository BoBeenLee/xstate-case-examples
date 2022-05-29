import { createMachine, assign, sendParent } from "xstate";

export const postMachine =



  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoIwMciAbcoiOsAYgDEBRAFQGEAJAPoAFAPIBlbohToiGIqhLSQAD0QAWAGyby6gJwBmABwAmE0YCMABj0B2PUYCsAGhABPRBa97yJvY8dTA3ULdS1NAF8I1zRMXEJSCioaekZmNgA5AEEANQBJAHEs7k5BblFBTgARPO48jILlWLkFJSRVRE0DE3JtR1tjWwtNW0cw1w8EAYNfPQsTK009c1s+qJj0bHxiMkpqWgYmFlYqzgAZHlKxSSbZeUVlNQRHB3IvdSMrWysjTRNNKzqCaeEz2chWAzWdRWMymD4mdYgWJbBK7ZIHcgAM2oqKgrAgigopAAbqgANYUZHxHZJfapbEYXEIEmoPA4e4kADaVgAurdYC0Hu0nuoAr4lpZHPN-D87MCEF4Rr5bL9Rf87EZVoiqdtEnsUgwGbjWGAAE6m1Cm8jIOjszGWgC21s21L16PpOJ2UGZJFJbI53L57WaHMeGjF6sl0scsts8usQ3IkJM+isAQh-wR0SRLt1aLpDDNFtNrAASjxSwBNEQSKTBu6tMMILQ+Ay2ewhIxhF4GeMwmbdPSdvRdCxSgza3Oo2kGvYseQkPEE3YsinOuJ5mcYqjz0jeln+1qB-mCtqgJ4AWgsoyTDgMMaMkMcIws8e8s2fgVMKvmRknG+nfVtzAXdFxNc1LWtW0MHtU0nR1QD3QYHdqD3H0-XZI9eRPUNhQ0Wx1HBRwTGvUIATTX54wMSFyHbEIrDHYYjDmWx-xRGkgPoVhsnyIoSjKCozjyG56wFXDz0QBYdHmKxAQcCwDGWYijHlaZZnmUVmPvCw5jY11dkgFpF0YEhkAAVwwVhqlqHDGzw551B6IZAU0aELEfTR+nlSEfE0OF1AMP5ZL+PTN3IQyFygcKICMpdCRM0k1wQjiIr3aLYvQ1lMMUY9RNPJsBiMIixm0b9iJMXt3EQYjHF6HShz0GFvgq0LANS4z2rxItIJtO1HXXdi9U69LIsyw8cuwvLxI6BynKhVyGI8ryqoQUELF6PRDFsBZuiMTULFalKYsi7jckKYpSnKQQhJEmQxLsiSECvMEDEBF5GtBVzqPlf4dAzRqBjCKF1EOobjr3U7eIugTBFObgsjyM5bKFR7oSK1Zgn2-QVX+VTqPUlNAkMKVdOzZK9ToIhMDSY4uD4IRrm4cRkbPGary8N4U1+hT9C6Qx5X6GYnEcbpFjbMc9tB3ZKepo5MjOvjLoqOGEaRqaHpmnoW30ZZlh0hZoRMeVfh8cw0y6PbNK0KWKBljAsU9CHlyJX1yUpKcOLth3GS9Mbsq5Sa7vy+yrwWXobDmdR20CSEBnlP51sfR8xma7abfIL2jS9cDiygvq4IG-Tbap+2s7Qg9-dyoPpsvGTw820Jo8fa9KsmGryE1EjqJePbPKzDYAM9kvwogkty24Ksa0kZn1ZRtnrCKlNtBbTbqI7eUo9sDvmIjkXqIhPQomzEhUCoeBRMG-NZzllmm00eZaIxyFHLHAJW88McZiHPwKo+UZ+n7jmQeboCze1xLfeyFUfBpgqr3Cq99XpxhWl4CEtFGqbScARBS5h05IRHsWCBj175OSfqEEiAQRZ9n6OQOwIxm6bQ+P0XBoCUKRUIZrcwvQSYES-PrPQ8YUxbwhM+GwmoiZfGYQadhTwDZcJ0jwvafD5QyiTMYKU-YvjfAnGTD2YNYomXMhgaRGgH73j2oYTyfltChB+p5DaYwRZaBhF2dOw1OrGKmO5WiskGLXgWC8VYP1AjkBFn4YYyxPJR0AeTAy4NFweOMEVMxWlLG-HvkCZBTgQmORhAELwj4QisR0cA6Ww8b6z1ZiKGYSxV4jnsBHI2K0ARFRjP8fQn1FhR3TpnR28SKlNgvMEapiCAT-APpQlaAQkkxiWPeUYIx9DdOHt1U0HiAobVqSMdBywBYPxFp5FygR+j3yWZgDxgylRdC+KMgEikJmTGhIRZipgfj5JeD8EGxTL5gHOYpdaVzVgwluf4d+Co9lSlCM+RyFU-B-iPkAA */
  createMachine(
    {
  context: { posts: [] },
  tsTypes: {} as import('./post-machine.typegen').Typegen0,
  schema: { context: {} as { posts: string[] } },
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
});
