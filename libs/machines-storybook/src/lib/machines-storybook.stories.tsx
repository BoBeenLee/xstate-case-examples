import { Story, Meta } from '@storybook/react';
import {
  oauthMachine,
  paginationMachine,
  checkIntervalMachine,
  postMachine,
  fileUploadMachine,
  pushNotificationMachine,
  phoneVerificationMachine,
} from '@xstate-case-examples/machines';
import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';
import { useMachine } from "@xstate/react";

export default {
  title: 'Machines',
  parameters: {
    xstate: false,
  },
} as Meta;

export const OAuthMachine = () => <RenderMachine machine={oauthMachine} />;

export const PaginationMachine = () => <RenderMachine machine={paginationMachine} />;

export const CheckIntervalMachine = () => (
  <RenderMachine machine={checkIntervalMachine} />
);

export const PostMachine = () => <RenderMachine machine={postMachine} />;

export const FileUploadingMachine = () => <RenderMachine machine={fileUploadMachine} />;

export const PushNotificationMachine = () => <RenderMachine machine={pushNotificationMachine} />;

export const PhoneVerificationMachine = () => <RenderMachine machine={phoneVerificationMachine} />;
