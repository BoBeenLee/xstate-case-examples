import { createMachine, assign, sendParent } from "xstate";

export const fileUploadMachine =

  /** @xstate-layout N4IgpgJg5mDOIC5QDMCWAbMBVADug9gIYQCyhAxgBaoB2YAdLgcbVAMQT5320Bu+AawZpMTIqQrVuYljSgI++coQAuqLgG0ADAF1EoHPlio1XfSAAeiACwBGABz0AnPdsBmAExPrAVi32ANi03AIAaEABPRDcAdhjnH1cPGNstJxCAgIBfLPCRbDxxMipaBhkIVjYwACdq-Gr6PFVkeoBbenzy4qkywtl5RWVTGm09JBBDY2HzKwRrD1tnQKc462sYt3sNn3CohCctJZ9fNOSYjy1rHLyMAuYJEuk+irk2AAUAJQB5AHEPgFEAMqA8yTEzqGgzRABaxuegxexrWwpA6+NzWXaIFL0axODwLdzWGE+dJXXIgTrPbqlegASQgmDYWDeABkvgBBAAioKM4LM41mdkcRORKS0MTsHlhmIQZ3o9kRCvxTkSvmuFNuXUkNP+tXqbAAwuyAHIG-4snlTCFQuaOdH4zwXZKSsKRaLWQ5uLQeALeYIBKVaS7qyn3ancXV1apsAEAFQ+AE1LXzIQLoloAs4-akXD4Aj5Ejs3QgHE56OKgm4fDEfIG4jlyTR8BA4OZQ0VtU97qxk9M0wggpn-AFNn50hd0TLbC56LZcT63Mi3Iv7E5suT28Rwwx6Zhe9b+14fDiRar0r7bHOZcu4fZgpeYiPbAsvCHNVTOwxI-V9-zQIKPBlFUlgdWJEQydY31ED9HjAX9U3-RAHBlABaRZcU8REC02S5fBrBssiAA */
  createMachine(
    {
  context: { progress: 0 } as { progress: number },
  tsTypes: {} as import('./file-upload-machine.typegen').Typegen0,
  schema: {
    events: {} as
      | {
          type: 'REFRESH';
        }
      | {
          type: 'PROGRESS';
          progress: number;
        }
      | {
          type: 'UPLOAD';
        }
      | {
          type: 'CANCEL';
        }
      | {
          type: 'RETRY';
        },
    services: {} as {
      uploadFile: {
        // The data that gets returned from the service
        data: { url: string };
      };
    },
  },
  initial: 'Idle',
  states: {
    Uploading: {
      invoke: {
        src: 'uploadFile',
        onDone: [
          {
            target: 'Idle',
          },
        ],
        onError: [
          {
            target: 'Error',
          },
        ],
      },
      on: {
        PROGRESS: {
          actions: 'setProgress',
        },
      },
    },
    Idle: {
      on: {
        UPLOAD: {
          target: 'Uploading',
        },
      },
    },
    Error: {
      on: {
        CANCEL: {
          target: 'Idle',
        },
        RETRY: {
          target: 'Uploading',
        },
      },
    },
  },
  id: 'fileUploadMachine',
}, {
    actions: {
      setProgress: assign({
        progress: (_, event) => event.progress,
      })
    },
    services: {
      uploadFile: (context, event) => async (callback, onReceive) => {
        const intervalId = setInterval(() => callback({
          type: "PROGRESS",
          progress: Math.random() * 100,
        }), 1000);

        // fileUpload
        callback({
          type: "done.invoke.fileUploadMachine.Uploading:invocation[0]",
          data: {
            url: "mockUrl"
          }
        });

        // Perform cleanup
        return () => clearInterval(intervalId);
      },
    }
  }
  );
