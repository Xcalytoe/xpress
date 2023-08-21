/* eslint-disable @typescript-eslint/no-explicit-any */
import { createModel } from '@rematch/core';
import { RootModel } from '.';
// import { GeneralApi } from '../../services/apis';

type GeneralProp = {
  contryCode: string;
};

const generalModel = createModel<RootModel>()({
  state: {
    contryCode: 'NG',
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
    // async getCategories() {
    //   try {
    //     const { data } = await GeneralApi.getCategories();
    //     dispatch.generalModel.setState({ categories: data });
    //   } catch (err: any) {
    //     const errorRes = err?.response?.data?.message;
    //     // toastHandler.error(errorRes);
    //   }
    // },
  }),
});

export default generalModel;
