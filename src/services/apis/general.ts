import ApiHandler from './ApiHandler';

const GeneralApi = {
  getVerifiers: () => ApiHandler.get('/verifiers', null, {}),
};
export default GeneralApi;
