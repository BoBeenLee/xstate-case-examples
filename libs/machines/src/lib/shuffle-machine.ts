import { createMachine, assign } from "xstate";

export const shuffleMachine =
  
/** @xstate-layout N4IgpgJg5mDOIC5SwBYFcBmGA2YCyAhgMYoCWAdmAHQAOBasYAxAAoAyAggJqKg0D2sUgBdS-crxAAPRAEYAHAGYqANgBM8gKya1OgOyaAnHsOaANCACec+VTWyADABYVDjYfkOHe+QF9fFqiYOPjEZJS02ASWFFCsHACqAMoAopICQqLikjIIelQOso56hWpOsnpO2oYW1giyulSympWazQ7qKiWa-oHoWLiEJBTUNFEx5HEAcikAGgAq6YIiYhJI0ogAtLJO+ZpaCurGsooOOrWIik5qVIqV8nqyhs8PhipOvSBBA6HDlEypNgpADCi3WGRW2XWuW2pyou3kb0UCjcChqVi28icBTUahUbRa5U0zg+n3I-AgcEk3xCQ3Co3ojCWmVWOS2jlsphUKgqJgqPMUaguCGRdmc-J83nkPNknxpgzCI0i0VizMha1AuSeKgKDweunxshlwpOtmaRTaAoc0ochjl-VpisoaqyGo2CG2jyo+za0rUx1O5wxHqNhgK1qK-rUtocgf8-iAA */
createMachine(
    {
  on: {
    SELECT: {
      actions: 'setPlayingContext',
      target: '.pause',
    },
  },
  initial: 'pause',
  tsTypes: {} as import('./shuffle-machine.typegen').Typegen0,
  states: {
    pause: {
      on: {
        PLAY: {
          actions: 'setPlayingStatus',
          target: 'playing',
        },
      },
    },
    playing: {
      on: {
        PAUSE: {
          actions: 'setPauseStatus',
          target: 'pause',
        },
        NEXT: [
          {
            actions: 'nextShufflePlayingContext',
            cond: 'IsShuffleModeAndHasNextPlaying',
          },
          {
            target: 'pause',
          },
        ],
      },
    },
  },
  id: 'shuffleMachine',
}
  );
