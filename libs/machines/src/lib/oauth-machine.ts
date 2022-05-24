import { createMachine, assign } from "xstate";

export const oauthMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QHsCGBXALgCwLKoGNsBLAOzADoBlYqUgSVIGIr6BxAOQH16PFQADsljFMxZKX4gAHogCcADgBsFJQBYA7ACYADHK1qlW-WoA0IAJ6IAzBoUUFARgCscpY6XONOtV4C+fuZoWHiEJOTUtAykAOqi2AAKAE7IAG7EEGBJTBASlGSpyADWlME4+ERklDR0jHE4yWkZWQgFyASoYhIA2joAulJCIl2SSDLyyqqauiZGJuZWCHI6FHJyztbKmgpaCmqaAUEY5WFVkbWx8Y3pmdlZKUkUAgA2nQBmyEkAthRloZURGrReqJFI3FptDojXoDMZDUTiUagWRLBRyVQbJRuRyOAwaZwKBaIYyOBxqLQeZb4nFKayHEB-CrhShsMCYACqsCyIOuzWyuQibRKv2O-2ZFFZHK5SR5YL5rVIhShiJhg2ECIkUhR1lsFDUaJ0jgUOic3g0cg0RIQFOcerk1n0G28WlpBnpjNOEUlnO5VzltyY90+T1emA+3xFISZZ290tlTVuCqVnRV-TVw0RWpsuv1yyNJscZotVusBL1Cnxu2cOnNagd7tF0Yi+DILHY3AA8uyACrpjVI8YIM0UYwW5y+PRqHFWrTWNSrBRotHuVyeXEBQIgUjITLwMYegHVKKMPsjLMIBQ6slTvQadyOTZaEubCjWDy7bQ7HSGxwNqOeo8LnjcEklPTMxhRXFdAoXEdE8CtHB0WdLxnWkyQLQtvwfHQNj-E5DwlNkfRlP0EyyMDNQgxByRnfQ7V0NFZxw+06U3A9xRbAd4TPKiEAJawHGcTw5HJI0nAUZwZ0Q8ttCNZxZ3HDRWKOf9DwogdIMJSxECNChv30gzDI0Dc-CAA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import('./oauth-machine.typegen').Typegen0,
  initial: 'SignIn',
  id: 'oauthMachine',
  states: {
    SignIn: {
      description: 'App 로그인 페이지',
      on: {
        SIGN_IN: {
          target: 'SignInWithProvider',
        },
      },
    },
    SignInWithProvider: {
      description: 'Google, Facebook, Github 로그인 팝업 페이지',
      invoke: {
        src: 'signInWithProvider',
        onDone: [
          {
            target: 'GetUserWithProvider',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'SignIn',
          },
        ],
      },
    },
    GetUserWithProvider: {
      description: 'provider user api 조회',
      invoke: {
        src: 'getUserWithProvider',
        onDone: [
          {
            actions: 'setProviderUserContext',
            target: 'Main',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'SignIn',
          },
        ],
      },
    },
    Main: {
      description: '메인 화면',
      on: {
        SIGN_OUT: {
          target: 'SignIn',
        },
      },
    },
  },
});
