/* eslint-disable @typescript-eslint/no-explicit-any */
import { createModel } from '@rematch/core';
import { RootModel } from '.';
// import { AuthApi } from '../../services/apis';

type AuthProp = {
  token: string;
  isVerifyEmailModalOpen: boolean;
};

const authModel = createModel<RootModel>()({
  state: {
    token: '',
    isVerifyEmailModalOpen: false,
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
        // const { data } = await AuthApi.login({
        //   username: payload.username,
        //   password: payload.password,
        // });

        // // const isSignUp = !!payload?.isReg;
        // if (data.accessToken) {
        //   dispatch.authModel.setState({ token: data.accessToken });
        //   // !isSignUp && toastHandler.success('Login successful');
        //   // Update profile
        //   // dispatch.userModel.getUserProfile();
        // }

        return true;
      } catch (err: any) {
        // const errorRes = err.response?.data?.message;
      }
    },
    async register(payload) {
      // try {
      //   const { data } = await AuthApi.register(payload);
      //   const loginData =
      //     data && (await dispatch.authModel.login({ ...payload, isReg: true }));
      //   // return true;
      // } catch (error: any) {
      //   const errorRes = error.response?.data?.message;
      // }
    },
  }),
});

export default authModel;
