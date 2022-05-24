import { createMachine, assign } from "xstate";

export const oauthMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QHsCGBXALgCwLKoGNsBLAOzADoBlYqUgSVIGIr6BxAOQH16PFQADsljFMxZKX4gAHogCMADgCcFBQDYArAGYADAHYALHr1qlChQCYANCACeiLXJ0U1uvRosG1FnTqUGAXwCbNCw8QhJyaloGUgB1UWwABQAnZAA3YggwFKYICUoydOQAa0pQnHwiMkoaOkYEnFSMrJyEIuQCVDEJAG0dAF0pIREeySQZRD1zCiVdU0VFHw09G3sECw0VJTkVrTmLPSdLPSCQjEqImuj6+MTmzOzcnLSUigEAG26AM2QUgFsKBVwtUonVYo1kmlHm0Ol0xv0hhMRqJxONQLIEHIlCoPIdvAotJYiV41vI9FoKBpfHozDitBZdhYtGcQMCqpFKGwwJgAKqwHKQh6tXL5KIdMpAi4gzkUbl8gUpIXQkXtUjFeFoxHDYSoiRSTFyRlyCjGPQWBR+RSGCzWOzyW0UAxKLYGORaNR6HSKdSs9lXKLy-mC+4qp5MF5-d5fTC-AFSsIc65BxXKlpPNUa7pawY60Zog2INQKPSzQ46RnFik41b2rE6AwUOSaZsWNQGHQrdss1mkZDZeATf2g2oxRh5vXoyYIAx29ZyJxOnQKBcadRqCtaIl+6VJsFju5NMM5CdjQsz51OzYrrSz7zMpRkjZaDRU4xKW3HDwdwLBNm7gMuR5YMlVDdMT2RXUzwmTE5hNC1LEOCwzApdsnyUZwcQ0N0K2Q3QjV-c5E0Aih8DIU8Cxg+QDDXJsaIbDw5DdAknwXNQnQwhtZzXAlkJ3YiRwo-UqKxBRWIUChfCk5D200HQtGmIIgiAA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import("./oauth-machine.typegen").Typegen0,
  initial: "SignIn",
  id: "oauthMachine",
  states: {
    SignIn: {
      description: "App 로그인 페이지",
      on: {
        SIGN_IN: {
          target: "SignInWithProvider",
        },
      },
    },
    SignInWithProvider: {
      description: "Google, Facebook, Github 로그인 팝업 페이지",
      invoke: {
        src: "signInWithProvider",
        onDone: [
          {
            target: "GetUserWithProvider",
          },
        ],
        onError: [
          {
            actions: "showErrorMessage",
            target: "SignIn",
          },
        ],
      },
    },
    GetUserWithProvider: {
      description: "provider user api 조회",
      invoke: {
        src: "getUserWithProvider",
        onDone: [
          {
            actions: "setProviderUserContext",
            target: "Main",
          },
        ],
        onError: [
          {
            actions: "showErrorMessage",
            target: "SignIn",
          },
        ],
      },
    },
    Main: {
      description: "메인 화면",
    },
  },
});
