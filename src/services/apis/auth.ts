import ApiHandler from './ApiHandler';

const AuthApi = {
  login: (data: any) =>
    ApiHandler.post('/users/login', data, { credentials: 'include' }),

  register: (data: any) =>
    ApiHandler.post('/users', data, { credentials: 'include' }),

  updatepassword: (email: string, data: any) =>
    ApiHandler.post(`/users/${email}/forget-password`, data, {
      credentials: 'include',
    }),
};
export default AuthApi;
