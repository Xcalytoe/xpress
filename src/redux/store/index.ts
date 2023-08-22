/* eslint-disable linebreak-style */
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin from '@rematch/persist';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { models, RootModel } from '../models';
import storage from './storage';

type FullModel = ExtraModelsFromLoading<RootModel>;

const persistConfig = {
  key: 'root',
  timeout: 1200,
  storage,
  whitelist: ['authModel', 'generalModel'],
};

export const store = init<RootModel, FullModel>({
  models: models,
  plugins: [loadingPlugin(), persistPlugin(persistConfig)],
});

export const persistor = persistStore(store);

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
