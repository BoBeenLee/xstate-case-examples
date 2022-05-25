import { createMachine, assign } from "xstate";

export const oauthMachine =

    /** @xstate-layout N4IgpgJg5mDOIC5QHsCGBXALgCwLKoGNsBLAOzADoAbZKGCAeSwGIAZBgcQH0BJAOUSgADsljFMxZKUEgAHogCMANmUUAnAFYlSgOwBmACwAGABwKjygDQgAnoj0aTFI46VG1agw40KTAXz9rNCw8QhJyaloeUgB1cWwABQAnZAA3YggwJOYIKUoyVOQAa0pgnHwiMkoaKGi4nGS0jKyEAuQCVAkpAG0jAF0ZETEu6SQ5RRUldS1dQ1NzK1tFFwoDNSU9BTWXAxMAJnWAoIxysKrI2tj4xvTM7KyUpIohKk6AM2QkgFsKMtDKiI1OrXFK3FptDojXoDMZDcSSUageQIZQKNTTEw6PZ6PR7FRqLbWOwIPY6BTONQmYwaQwE3xHEB-CrhSgwTAAVVgWXqiVBzWyuQibRKvxO-xZFDZnO5IKad1apEKkIR0MGonhUhkyJMRj2FExpPWBixGiMDiJiD2ewM6hMrg01o0GjUWJ0DKZZwiUq5SR5N35zAen2er0wH2+opCzPO3plDT58ohnRV-TVwwRWsQOr1Bp0RpNZo0FoQtNWZlxBy0RiUayU7rF0cBtHo0TYnC4DHZABU0xrEeMUXsjEZVrq1BYdKazV5i9abcaawosbqlB47fWo57KEQwAQimRam9WM3IK3BflFcVSg2txQd3uDzwjyeINEFUrkz1U7D1SNMyT1goLRdkxDZ3CUDQdFnAxyRdRdlzxNcNA3U4AW3bBd33UhD2POhT1IQMkkeEN3k+H4PTQu8MIfbCn1wltSHfdpP1IVUf3TTUxmRA4pmAkxQL0cDIOLcd1HHEw1CHHR+OkjYAkCEBSGQTJ4DGCiJRqegmEwXs-y4xQcT1GCdCMfQlFJGsDFnKkKGtIdqTxHRjD2ZCFPU84gSueM5SyXSM30lE7T0fUXT2ExDGNMlq1nSdnH2Sclyddw7TdNyb0o2NfVlMEkj8zikUQHwdAoPRJJ0fRsU0Yc1FncwyyMAwDGtXwPAOAwUPFDyX2iPL+2Rcw1goFRII8aqvF1Wc9CcY0XGS3FDBrVLjk3Sj7ywnDuv7OE9IKhAmuLNFgrMFLHAUMLHH8NKVpZXr-18A7io8J7nuemt5L8IA */
    createMachine(
        {
  context: {},
  tsTypes: {} as import('./oauth-machine.typegen').Typegen0,
  initial: 'checkingIfLoggedIn',
  id: 'oauthMachine',
  states: {
    loggedOut: {
      entry: ['navigateToLogInPage', 'clearUserContext'],
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
