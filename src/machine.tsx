import { createMachine, assign } from "xstate";

export const dogMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBWAbMYADgMQAyqArhAAQByqAlrGIqIarAwC4OoB2rEAA9EAJgDsARgzipAFgDMANgUAGUZMkBOABwAaEAE9EOgKwZJspTskKtS8etUKAvi4NpMOfEWIBlAFswXFxYagAxVFQIQXZOHn5BEQRJJS0MU1MtBWVxOUlTSR1ig2MEUXyMLULJVTl7VS1VUzq3D3RsAHcAQwBrMAw-H0JDMkoaeiYWJBA47l4BGeSFHXEMfNVU3SVNVR05UsQlPYw7HfFRRss8rTaQTy6+gYAhMCgoBj4oYgBxBgA3MDUAAqACcwN0uLEOPNEktEABaIqiU6SfIXHTWVTHAqHBCZNaiBRyOriUxyHQrcS3dz3DpYHr9YjhbohMLdPAEQjQ+ILJKIZRVPa6URZeo6USYvHEpQYVRksyyC6iDSSNy0vjROCCB7eLk82GLUDJBFkqoKclyK21OQSBR42xrC6aOTU8WKOR3XWMgZDLllNgwhJG4SIV3SOzylpKLIy4l48UYJQUiSY1R7Ypq2nep6DADG3XBMRmc2D-PKSllcmsaLSpgcSlFeMc5gKCm0EjR2OyXvpPowr3enygBrL8IQCJVqPRkqxOMyeMyqhkK1MOi0eWxaM92b7T1HfPHk+x08ss502M2pgToqTpk3FOTOyKSl7I5LQcPxsRROX7ZnmIXvODooi+1ItPYyZyC0ojqi4QA */
  createMachine({
    id: "Dog",
    initial: "Asleep",
    states: {
      Asleep: {
        on: {
          "Loud Noise": {
            target: "#Dog.Awake.Scared",
          },
          "Smells Food": {
            target: "#Dog.Awake.Sleepy",
          },
        },
      },
      Awake: {
        initial: "Begging",
        states: {
          Sleepy: {
            on: {
              "Loud Noise": {
                target: "Scared",
              },
            },
          },
          Scared: {},
          Begging: {
            on: {
              "Give Treat": {},
            },
          },
        },
        on: {
          "Falls asleep": {
            target: "Asleep",
          },
        },
      },
    },
  });

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHUCGAbA1gOjVglgHZQDEAMmKgG5gAEAFgPYC2YioADo7PgC76NC7EAA9EARgCcAZmwAWAOzTxC1QFY1ADgAMAJmlyANCACeEzQDZ5uuRd0K5um9vHiLAX3fG8OAPKFaVFoAdwxMEgBxMF5aACNUAGNMBhY2JBAuHn5BYTEEewVsTV0ZaQU1SX05SRljM3yFK1VNNRKKyWqDTy8QQkYIOGEfXDCiKGFMvgEhdLzHOokLJs1JFYVdDQspXU1PbzDsf0CQsInuKZzZxGlleQs1bU1NFVtbBYRxaTVsbQVfxUc1Ua4j2IGGPloYEIAwgZyy01yiHmpkQ9m02HEcnEanE2jKagUUmkoJ8cIuM1AeXEmnedh+ClWFme90UDl23SAA */
  createMachine({
    id: "Walk",
    initial: "Walking",
    states: {
      Walking: {
        on: {
          "Leave home": {
            target: "On a walk",
          },
        },
      },
      "On a walk": {
        on: {
          "Get back home": {
            target: "Walk ended",
          },
        },
      },
      "Walk ended": {},
    },
  });

const machine2 =
  /** @xstate-layout N4IgpgJg5mDOIC5QAUAWB7AdmABAYwEMAbInAWwL1QEtsA6AWWrwCd0AHDehgVwBdIAYgCqmMv0iJQ7dLGp9qWKSAAeiAKwBmAIx1NmgAyaAnJoAsZgGwAmM8csAaEAE9E1zdb0AOa8fW2Adm0rd2sAXzCnNCxcQhJyShpuZjZOGLpRcQEIQV4BZRk5BSUkVTdtXXU-dTMvP21NLSsnVwQTTTptXxNtKrMdcwiorljiUgoqWjA6ADVqCDB0OgBlDAB3WigcADd5xcEACT2cOYX0Atl5RUxlNTbjAzoza0sqgy0Av2sAlsRLTUsdAMtnUXQMXRsdSGIGi2HwYwSk3op0WdCOEE2Jz26EEq3QayxZwuRWut0Qhl0lne5kMpm0AQsvwQAUsXieAQZPn6BmMpk00Nho3iEyS0wA6tQiBBCCwIDgCCwwAQ6AAxdA4gBUxKuJVAdx0bOBVMhti8Zm0XiZ9k8ZiqOiCLP0xjMApG8OFiSmdAlUplcoVSroACEFYItaVCjqbqU7g0Ot8LNYuuo6vT9EztAYqXpwV4AuCKl56ZYIpEQJh0At4KVBe7xp7kqwOCNGBIINritG9YgumYgdY8wOs-SU5Yfi4e5Y+wzrAPNPn3HVbK6YnXEaLGClm+lMm2O6SY4hasY9HZanZ829NEzzSf1K8zea6uoU7aV3C4vWkdMmE20th911MoEEzR5gUHLxhwCUdx1aYxdGg4IDE+HkAi5Esy1rT91y9FEljxDZMC2XYiQjS5OzJEDvjoOoDGfHR4I5DwmRsE9NDzfxkKsHkvHUd8hS-Dc8LReZMTwwCu2ArRPCpWlZ2gnljCZFldDNAwzAXU0E34tcRVw7EJMozMOlo+jtEYgJmInBAX0BExLEsEdrCMAc+Mwt1sL0+gfWlBV-UVZU1XOMiSSA2NbH7CCoJgq0Xxo2cB14811ACdwdM8htxUlXzZXlALgwVQzDzaZDOi8Jc8wtC12Izak6Ac49+i8djXnCdzVwy79vWyv08qVIruxAgwwIHVLIMc6CvDHJlys8ZqGg5DSORfAJ0oRLywAG4CWUisboqm2CezZFlqSTekRzHUswiAA */
  createMachine({
  id: "Phone call machine",
  type: "parallel",
  states: {
    Microphone: {
      initial: "Muted",
      states: {
        Muted: {
          entry: "Mute microphone",
          exit: "Unmute microphone",
          on: {
            Unmuted: {
              target: "Unmuted",
            },
          },
        },
        Unmuted: {
          entry: "Umute microphone",
          on: {
            Mute: {
              actions: "Mute microphone",
              target: "Muted",
            },
          },
        },
      },
    },
    Video: {
      initial: "Showing video",
      states: {
        "Showing video": {
          on: {
            "Hide Video": {
              target: "Hiding Video",
            },
          },
        },
        "Hiding Video": {
          on: {
            "Show Video": {
              target: "Showing video",
            },
          },
        },
      },
    },
    "Wildcard area": {
      initial: "Foo",
      states: {
        Foo: {
          on: {
            "*": {
              target: "Bar",
            },
          },
        },
        Bar: {
          on: {
            "*": {
              target: "Foo",
            },
          },
        },
      },
    },
  },
}).withConfig({
    actions: {
      "Mute microphone": () => {
        console.log("Micro");
      },
      "Unmute microphone": () => {
        console.log("Unmute Micro");
      },
    },
  });

const counter =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2UoBswDoCiAdgIYBG2EOA8gQMRobaKgAOqsAlgC7uoFMgAPRAEYAnADYcAJgDMADnEBWGQAZhc2TPEAaEAE9EUgCxScc9UZPmA7Co1G5AX0e76WXIVLkqAMx910d35WDm5efiEEMUlZBWU1DRktXQMo0UUcYTVFOVFha1EVcVFnV0DsfGIySF9-YLYuHj4kQUQclRwVa3EpLKNxbpMUkTkjHAdrLUKVB1EjRXFnFxACVAg4fjcKgBF2WC9IetCmiLbrYYRFBfHhJWFFURk56ylSkC2PKu9qI8bwlsiLwu0WkEnkchkUnEo3E+TeH0qBwolD8vzCzVAkSkoms0gWEJUC1EvS6wOKOFENnE4hUUkm1m6Mnh5U+SLRJwBiAcFwkFMKcgJwi0Aqcyw+7P+mMMRguxk6KgViqViusS0cQA */
  createMachine({
  context: { count: 0 },
  initial: "Enabled",
  states: {
    Disabled: {},
    Enabled: {
      initial: "On",
      states: {
        On: {
          on: {
            Toggle: {
              target: "Off",
            },
          },
        },
        Off: {
          entry: "incrementToggle",
          exit: "incrementToggle",
          always: {
            cond: "Count greater than 5",
            target: "#Toggle.Disabled",
          },
          on: {
            Toggle: {
              target: "On",
            },
          },
        },
      },
    },
  },
  id: "Toggle",
}).withConfig({
    actions: {
      incrementToggle: assign({
        count: (context) => context.count + 1,
      }),
    },
    guards: {
      "Count greater than 5": (context, event) => {
        return context.count > 5;
      },
    },
  });


  const machine4 = 
/** @xstate-layout N4IgpgJg5mDOIC5QDED2qAEBbAhgYwAsBLAOzADoyB3DWAFxzrAwEYBiNVRUAB1ViJ0iqEtxAAPRAHYAnOQCsUgAxL5MgGxTF6gExKAHABoQAT0Q6dAZnIAWdZoeX1LdRpsBfd8c7Z8xMpRgNPSMzOziIUzkOABmTABOABR6KgCUHOi+hKQU1LQMTKxifAJCImKSCAC0LDYs5BY2+ko2MvpSmm1SxmYIOvbkMiwyOjLy7UNSnt6ZuNkBeZHMOmwAQjjxxfyCwqJIEuaj5Jbaqur6jR3yPYgssuTqSpZSNvJK6jYdOizTID5z-jAaw2LC2pV2FUQdiU5HeMksFxkbRY8nkOhufQGQxGSP68nsH08XhAJFQEDgYn+fhygWCBTCYJ25X2lScGP0NkGMgMWk+LEsGguvyp81yQXyoQwOkZZT2oEqLA55GGzju9g55wx-RhOguliU-S+dxewtm1LIMohLMQNXU8gaOiaLS6nXaGKq1m+eiRmjhBha8jAVSmRKAA */
createMachine({
  on: {
    Bar1: {
      target: ".new state 2",
    },
  },
  initial: "new state 1",
  states: {
    "new state 1": {
      after: {
        "2000": {
          target: "new state 2",
        },
      },
      on: {
        Foo: {
          target: "new state 2",
        },
      },
    },
    "new state 2": {
      on: {
        Bar: {
          target: "new state 1",
        },
      },
    },
  },
  id: "Foo machine",
})

const posts = 
/** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAusB0AxMGAxgBbYCWEANmAMT5HGIrpkZmoB2TIAHogLQBGbADYRAdgCsIgAwAOGQBYAnDJnLBIyQBoQAT0RyATNiNGZIxYoDMc69fGDjAX2e60mHPRJ4CJMhxQNBCcYOQcAG6oANZh3oxIIB6s7FyJfAhCiiaKmoKadkYayso6+ojWGtiS4pW5MkZymuJG4q7u6Fi+DN3+gTRgAE6DqIPYyJQAhhgAZqMAtr0JzLApnNwZRjbYgg3qyooigpKSgta6BgiO1qZyytYy1kciT5Jy7UmdXn6k8QFBAGFJhxCGBKNxkmx1ukBCJsJUxJIZJoREZBMo5OI5BdEMdFPCEfJMW8imdXG4QBxUBA4BCvktyFQwgA5VAAUWGozpqyhaVAGX4ihkknhNixTzkkmUlkxOIQgiMN3EDSOx3uW0lkg+Hi68UZ1GwHJGg25az5vAERhEylMtWkpTkqJaFjlZnxihqjVk1icRRE2vpeoo1FNvI2AmyNusYrsIkl0sUsvKCCR2EcgmVwqKNicbQpOu+PT+gVDqXD8uMOyOkrujtO4gxcoVJmjT2sRje9Qz73zgZ+peh-IjkhurfFcalMvEcv4ZltGikVp94hUZN7ngH5oFinE4lFDlj8anM9KtrUp2FNSa1vJziAA */
createMachine({
  type: "parallel",
  states: {
    Fetch: {
      initial: "idle",
      states: {
        idle: {
          initial: "NoError",
          states: {
            NoError: {},
            Error: {},
          },
          on: {
            Fetch: {
              target: "Fetching",
            },
          },
        },
        Fetching: {
          invoke: {
            src: "fetchData",
            id: "Fetch",
            onDone: [
              {
                target: "idle",
              },
            ],
            onError: [
              {
                target: "#posts.Fetch.idle.Error",
              },
            ],
          },
          on: {
            Cancel: {
              target: "idle",
            },
          },
        },
      },
    },
  },
  id: "posts",
})

