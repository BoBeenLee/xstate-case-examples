import { createMachine, assign } from "xstate";

export const shuffleMachine =
  
/** @xstate-layout N4IgpgJg5mDOIC5SwBYFcBmGA2YCyAhgMYoCWAdmAHQAKBasYAxDQDICCAmoqAA4D2sUgBdS-cjxAAPRAEYAHAGYqANgBM8gKya1OgOyaAnHsOaANCACec+VTWyADABYVDjYfkOHe+QF9fFqiYOPjEZJS02ASWFFAs7ACqAMoAopICQqLikjIIelQOso56hWpOsnpO2oYW1giyulSympWazQ7qKiWa-oHoWLiEJBTUNFEx5HEAcikAGgAq6YIiYhJI0ogAtLJO+ZpaCurGsooOOrWIik5qVIqV8nqyhs8PhipOvSBBA6HDEUn9EJ4fgQagAeXITDBADFoUtMqscltrg4qPJDGo9K4OppFIpdBcEE5bE5FFojKTXI5NCpPt8gWERlQAcFBiDwVgoVN4StsutcptTqiVBVvIY8YoTi5zFYtpiCro9PYHsSHiLaQEvoDBozKExUqwUgBhRbrDK8tagAUnVG7dEqSWeZU1WUITbyJwKtQqNotcqaZwfT7kdnwdb0nV-Ub0Rg8rKWjZuxy2UwqEV6EwVEX4wmSuzOLM+bzyEWyOna37hUbjWJxxH8uRvAoPB66H2yUuEk62ZpFNrZhwlhyGcusytMlk-YGgqgQut8q1bfGyKiaa4Oj0dx6KNOE8pUcWGLxvK6KDxqN6jqe66iToHs2dYecJgVOJy27x6MkaeQX66EwVlB0fQt3eZ5nivBko2ZCtpzAZ8kTdFxPXfDNv3kX9DH-V1tg6VdiklIwTFcXZIMjKsEIbJCMKoVCv1-DC-zUACnhXJw3lYtosLUYcNX8IA */
createMachine(
    {
  tsTypes: {} as import('./shuffle-machine.typegen').Typegen0,
  on: {
    SELECT: {
      actions: 'setPlayingContext',
      target: '.Pause',
    },
  },
  initial: 'Pause',
  states: {
    Pause: {
      on: {
        PLAY: {
          actions: 'setPlayingStatus',
          target: 'Playing',
        },
      },
    },
    Playing: {
      on: {
        PAUSE: {
          actions: 'setPauseStatus',
          target: 'Pause',
        },
        NEXT: [
          {
            actions: 'nextShufflePlayingContext',
            cond: 'IsShuffleModeAndHasNextPlaying',
          },
          {
            target: 'Pause',
          },
        ],
      },
    },
    ShuffleMode: {
      initial: 'Off',
      states: {
        On: {
          on: {
            OFF: {
              target: 'Off',
            },
          },
        },
        Off: {
          on: {
            ON: {
              target: 'On',
            },
          },
        },
      },
    },
  },
  id: 'shuffleMachine',
}
  );
