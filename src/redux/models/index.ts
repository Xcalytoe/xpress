import { Models } from '@rematch/core';
import authModel from './authModel';
import generalModel from './generalModel';
import userModel from './userModel';

export interface RootModel extends Models<RootModel> {
  authModel: typeof authModel;
  userModel: typeof userModel;
  generalModel: typeof generalModel;
}

export const models: RootModel = {
  authModel,
  userModel,
  generalModel,
};
