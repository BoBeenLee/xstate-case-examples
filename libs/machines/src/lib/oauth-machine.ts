import { createMachine, assign } from "xstate";

export const oauthMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QHsCGBXALgCwLKoGNsBLAOzADoAbZKGCAeSwGIAZBgcQH0BJAOUSgADsljFMxZKUEgAHogCMAVgAMCigoAsAZgBsAJgXaAnLs0B2fQBoQAT0T7VFABwr9550uPGtzzZoBfAJs0LDxCEnJqWh5SAHVxbAAFACdkADdiCDAU5ggpSjJ05ABrSlCcfCIyShooWIScVIysnIQi5AJUCSkAbRUAXRkRMR7pJDlFVXUtPUMTM0sbewQFNQpvFWdjfyMtnW0gkIxKiJro+vjE5szs3Jy0lIohKm6AM2QUgFsKCvDqqJ1BrXNK3NodLpjfpDCYjcSScageSrVSaDSaJRKczmHa6bTaJSaZaKPEuTSOZxGYzmFSqXRHEB-KqRSgwTAAVVgOUayVBrVy+SiHTKvxO-xZFDZnO5IJad3apGKkIR0OGonhUhkyMp+hclmx2OMzk8zmsdgchgomlc5McHn0-mch2CjLFzPOUq5KR5N35zAen2er0wH2+orC7qinplTT58oh3RVgzVowRWsQOr17gNRpNZpW2gxG3MSidXm0xpU1udxwjZ0BtHosTYnC4DHZABUUxrEZNVoYVFa3DjjFXNEalMSEA7B9SVNSMQTC+ZAi6mfXKEQwAQSmR6m9WI3IM3BYVFaVym6NxQtzu9zwD0eILEFUrE31k7D1WN09PTBQlDMZxdG2LFtH0Ksp3xYwKH0fQ9E0PFNAUPwPAZdcAU3bBt13Uh90POhj1If0UkeIN3k+H4MIlW9cPwp8XwTKFP2Eb80wmZF9H-QDrRA4wwIgolzQQUcNlHY13HJWldDcIIXVIZBsngCZqPOOp6CYTBux-DjFHxXVkJpcw5nMMwhJWeC0VMVRR1UGk7P0dCr0wi5gVjOUcm09ikUUSxnAofYx10bwDA8KcjCUMksVLECqx4py6xc6NvVlMEUi8zVdIQJQFHMCgTH0U1jH0GSdHMKCVDy-VdHMZRSy0LZ6TXZyJXUoiMt7ZE1i8ChdGUFcuONccdCnSyNl0GzaUqqbLAS04XNo+9H0I59ezhHSfIQclRp8AKJqKzw3BUWk5vFGoOt-FDwv847bruu6tDkgIgA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import('./oauth-machine.typegen').Typegen0,
  initial: 'checkingIfLoggedIn',
  id: 'oauthMachine',
  states: {
    loggedOut: {
      on: {
        LOG_IN: {
          target: 'logInWithProvider',
        },
      },
    },
    logInWithProvider: {
      description: 'Google, Facebook, Github 로그인 팝업 페이지',
      invoke: {
        src: 'logInWithProvider',
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
        LOG_OUT: {
          target: 'loggedOut',
        },
      },
    },
    checkingIfLoggedIn: {
      invoke: {
        src: 'checkIfLoggedIn',
        onDone: [
          {
            target: 'getUserWithProvider',
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
