import { createMachine, assign } from "xstate";

export const oauthMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QHsCGBXALgCwLKoGNsBLAOzADoAbZKGCAeSwGIBlASQHEA5AfXe6JQAB2SximYslJCQAD0QBGAAwBmZRQBMANk0AOACwBONdoCsAdgOaANCACeiTToqrFexdpM7Peo6oBfALs0LDxCEnIKcShSdlIAdQlsAAUAJ2QAN2IIMDTmCGlKMkzkAGtKUJx8IjJKGLjE5PSsnLyEEuQCVElpAG1lAF1ZUXFemSR5JTUNHX1jU0trO0cEAwsjCiNtRX9lPWUDPQ8jAyCQjGqIuujiWPiknBbs3Py8jLSKYSoegDNkNIAWwoVXCtSiDQezQyL3anW64wGw0mowkUgmoAUCBUqlUWm0R2UZjMegJqisKyUqk2qks2wMBjcFlp7nOIFBNUilBgmAAqrA8o9UjC2vlClFOhUQZcwVyKDz+YLoa1Xh1SKUEeikSMxGjpLIsbiLBR1kZthZNIpNMptLaDJSENazFtTvpybTmYFguyZZybgqBWkhc9Rcx3gCvj9MP8gdKwn6ogGlU8Rar4T0tUMdWN0QbEEaTRtzZbrbaCQ7VJaTUYraoDGY66TDmdvRzrlEaHRIPE2Fw+AxeQAVbN6jFTBDM53KZRmgyKCxWfYOy3aE2kutGCx+OvaVR6Nlt8GUIhgAhlMhQdi-AAytHoPfFxXV5Uqvvbx+wp-PpEvN7v3dINUNQzfosxRXVxjzBAC1NYsrRtO0HUUEkKGUZDnEXMw52tfdWzfI8KBPM8LyvW8uwgHtw0+b4-gBYFDzlIjv1-Mj70A9NETAkQINzSZDXJQszW0C14LLe0HEQEwXX2IxrS3PQty8IJvVIZBcngSYGJuTt6CYTAR0gvjEFJRQKAbXc0J0BcDF0ZcVDXZtNDnPw9k0A98LlSEmhTFU8gM3jMSUHQDAoRQwuMAwbV2VQkIsVdcWUDZGTMJyLU0Mx3Pjd95TAPlA2DVM-PAnN9SMtZbAk8qQotNxzAZBT6W0TKrgInSAP80rAoQEkQucTR-CctCLGUTQLDsjRCQZJz3DNL0LiygimJIv9yPiDqxyxYStmQxKjBJMLp2OJCZwoPRLD3BSLpUfxmtlOp1qg9wkL0VDpze963sUFsgiAA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import('./oauth-machine.typegen').Typegen0,
  initial: 'loggedOut',
  id: 'oauthMachine',
  states: {
    loggedOut: {
      on: {
        SIGN_IN: {
          target: 'signInWithProvider',
        },
      },
    },
    signInWithProvider: {
      description: 'Google, Facebook, Github 로그인 팝업 페이지',
      invoke: {
        src: 'signInWithProvider',
        onDone: [
          {
            target: 'getUserWithProvider',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'loggedOut',
          },
        ],
      },
    },
    getUserWithProvider: {
      invoke: {
        src: 'getUserWithProvider',
        onDone: [
          {
            actions: 'setProviderUserContext',
            target: 'loggedIn',
          },
        ],
        onError: [
          {
            actions: 'showErrorMessage',
            target: 'loggedOut',
          },
        ],
      },
    },
    loggedIn: {
      on: {
        SIGN_OUT: {
          target: 'loggedOut',
        },
      },
    },
    checkingIfLoggedIn: {
      invoke: {
        src: 'checkIfLoggedIn',
        onDone: [
          {
            target: 'loggedIn',
          },
        ],
        onError: [
          {
            target: 'loggedOut',
          },
        ],
      },
    },
  },
});
