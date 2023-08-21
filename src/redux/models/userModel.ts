import { createModel } from '@rematch/core';
import { RootModel } from '.';
// import { logout } from '../../helpers';

// import { UserApi } from '../../services/apis';
import { User } from '../../types/user';

type UserProp = {
  user: User | null;
};
export const pagination = {
  results: [],
  currentPage: 1,
  totalPages: 1,
  totalRecords: 0,
};

const userModel = createModel<RootModel>()({
  state: {
    profile: null,
  } as unknown as UserProp,
  reducers: {
    setState(state, payload: Partial<UserProp>) {
      return {
        ...state,
        ...payload,
      };
    },
    activeAccount(state, payload) {
      return {
        ...state,
        activeAccount: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // async createAddress(payload: Partial<Address>, state) {
    //   const { user } = state.userModel;
    //   try {
    //     await UserApi.createAddress(payload, user?._id!);
    //     // dispatch.userModel.getUserProfile();
    //     // toastHandler.success('Address updated successfully');
    //     return true;
    //   } catch (err: any) {
    //     const errorRes = err?.response?.data?.message;
    //   }
    // },
  }),
});

export default userModel;
