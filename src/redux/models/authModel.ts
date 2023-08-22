import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { AuthApi } from '../../services/apis';

type AuthProp = {
  token: string;
};

const authModel = createModel<RootModel>()({
  state: {
    token: '',
  } as AuthProp,
  reducers: {
    setState(state, payload: Partial<AuthProp>) {
      return {
        ...state,
        ...payload,
      };
    },
    verifyModal(state, payload) {
      return {
        ...state,
        isVerifyEmailModalOpen: payload,
      };
    },
  },

  effects: (dispatch) => ({
    async login(payload) {
      try {
        const data = await AuthApi.login(payload);
        if (data) {
          dispatch.authModel.setState({ token: 'data.accessToken' });
          return true;
        }
      } catch (err: any) {
        // const errorRes = err.response?.data?.message;
      }
    },
    async register(payload) {
      try {
        await AuthApi.register(payload);
        return true;
      } catch (error: any) {
        // const errorRes = error.response?.data?.message;
      }
    },
  }),
});

export default authModel;
