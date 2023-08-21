import AxiosMock from './ApiMock';

const AuthApi = {
  login: (data: any) =>
    AxiosMock.onPost('/dummy_url', data, { credentials: 'include' }),

  register: (data: any) =>
    AxiosMock.onPost('/dummy_url', data, { credentials: 'include' }),
};
export default AuthApi;
