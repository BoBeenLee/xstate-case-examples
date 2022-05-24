import { createMachine, assign } from "xstate";

export const pizzaMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCWAvdBDAslgxgBaoB2YAdLGAC4AqAnsmAMQCqACgCICCtAoohQB7WKmqohJQSAAeiAKwAGcooBsigByKALKvkBOAOzaAzIvmqANCHqJ9y-fvkntAJnMBGNau36Avn7WaJi4BMRklDQMTMwAcnwAGrTSyCJiElJIsogeTuRurh7azvKGGoZKrta2CK6u+uSqrupN5YYmHqqGhgFBGNh4RKQUVHRCyGgkULBsXLwCWami4pLScghmquSuJmZK5l1NiobVdhr5Hp2u7XqK9aq9IMEDYcORYxOk08zsAEp8ADUUmkVplQOtcvJ8nUiiUyhU7qcEB4NB5Gm5tIYmvJcp0HoEnv1QkMIqNaONJt94klgcsMmtELotiZ1Cz5KZ7PJXOykTtDCo3CZ7CjtJi9D0Cc9ieERjRuBAIAAnOAzDg8fi09KrLLrUomRpY0U+fRNez6JFeKEaa76DzNMqOZr+SVEwYy97ypUqn7-IGLEH0nWM1TM1l6DnmbnaC0aBrmcqQwzNDQmR5St1vUae5WwGbU5L+una8GIJNQsyx4zyasmdoeXmKfVaCoVHHFJMstOu16k6hYRXUABCWAA1l9mIPuABpACSsQA4gB9WgzgDCU81oIZCA0ugNoqTimOJqKSKM5BTxxMpW6+l0toCBJIQggcBS3ZJsrojDAm8DJYQTEY1ccgTVtVxL3KHxuS7EIM1JKIKS+eBCy1MFslqDRzm0NRrmOO0NHUZwLXscgTA0dkPBZOokxuWCXk-D0FRzFDhCLdDdQMMjRV8Y8cNrc0bByc8tE6fRYxZVR7F8ejpUzPsB2HMcpj-YsMNRc5riULotExO16yE5FYwvHQuXca8fExWT4N-VCtyDWoTAtflHEcFEIOvRRbXxAIgA */
  createMachine(
    {
      context: {
        status: "Deciding",
        bakingTime: 0,
        type: "Pepperoni",
        toppings: "Lotsa toppings",
        address: "My Address",
      },
      tsTypes: {} as import("./pizza-machine.typegen").Typegen0,
      schema: {
        events: {} as
          | { type: "UPDATE"; value: string }
          | { type: "NEXT" }
          | { type: "PREV" }
          | { type: "BAKING_TICK" },
      },
      initial: "setType",
      id: "pizzaMachine",
      states: {
        setType: {
          on: {
            UPDATE: {
              actions: "updateType",
            },
            NEXT: {
              target: "setToppings",
            },
          },
        },
        setToppings: {
          on: {
            UPDATE: {
              actions: "updateType",
            },
            PREV: {
              target: "setType",
            },
            NEXT: {
              target: "setAddress",
            },
          },
        },
        setAddress: {
          on: {
            UPDATE: {
              actions: "updateType",
            },
            PREV: {
              target: "setToppings",
            },
            NEXT: {
              target: "startBaking",
            },
          },
        },
        startBaking: {
          entry: "setBaking",
          invoke: {
            src: "bake",
          },
          on: {
            BAKING_TICK: {
              actions: "bakingTick",
            },
          },
        },
      },
    },
    {
      actions: {
        updateType: assign((ctx, event) => {
          return {
            type: event.value,
          };
        }),
        setBaking: assign((ctx, event) => {
          return {
            status: "Baking",
          };
        }),
        bakingTick: assign((ctx, event) => {
          return {
            bakingTime: ctx.bakingTime + 1,
          };
        }),
      },
      services: {
        bake: () => (send) => {
          setInterval(() => {
            send({ type: "BAKING_TICK" });
          }, 1000);
        },
      },
    }
  );
