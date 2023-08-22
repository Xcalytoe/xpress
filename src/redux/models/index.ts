import { Models } from '@rematch/core';
import authModel from './authModel';
import generalModel from './generalModel';

export interface RootModel extends Models<RootModel> {
  authModel: typeof authModel;
  generalModel: typeof generalModel;
}

export const models: RootModel = {
  authModel,
  generalModel,
};
