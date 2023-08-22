/* eslint-disable @typescript-eslint/no-explicit-any */
import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { GeneralApi } from '../../services/apis';

type GeneralProp = {
  verifiers: any;
};

const generalModel = createModel<RootModel>()({
  state: {
    verifiers: null,
  } as GeneralProp,
  reducers: {
    setState(state, payload: Partial<GeneralProp>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getVerifiers() {
      try {
        const { data } = await GeneralApi.getVerifiers();
        dispatch.generalModel.setState({ verifiers: data });
      } catch (err: any) {}
    },
  }),
});

export default generalModel;
