/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import { store } from '../../redux/store';

interface IOptions {
  fullPath?: boolean;
}
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.timeout = 60000;

// const BASE_URL = ENV_KEYS.BASE_URL;
// const API_KEY = ENV_KEYS.API_KEY;

// axios.defaults.baseURL = BASE_URL;

async function handleRequest(req: any) {
  const reduxStore = store.getState();
  const token = reduxStore.authModel.token;
  // req.headers['API-Key'] = API_KEY;
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`;
    return req;
  }
  return req;
}

async function handleResponse(res: any) {
  return res;
}

const handleRquestFullPath = (url: string) => {
  // return BASE_URL + url;
  return url;
};

async function handleErrorResponse(err: any) {
  if (err?.response?.status === 401) {
  } else if (err?.response?.status === undefined) {
    return Promise.reject({
      response: { data: { message: 'Request could not be completed' } },
    });
  }
  return Promise.reject(err);
}

axios.interceptors.request.use(
  async (req) => handleRequest(req),
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  async (res) => handleResponse(res),
  async (err) => handleErrorResponse(err)
);

//  * The ApiHandler framework with observable

const ApiHandler = {
  post: async (url: string, data: unknown, options: IOptions | any) =>
    axios.post(
      options?.fullPath ? url : handleRquestFullPath(url),
      data,
      options && { headers: options }
    ),
  patch: async (url: string, data: unknown, options: IOptions | any) => {
    return axios.patch(
      options?.fullPath ? url : handleRquestFullPath(url),
      data,
      options && { headers: options }
    );
  },
  put: async (url: string, data: unknown, options: IOptions | any) => {
    return axios.put(
      options?.fullPath ? url : handleRquestFullPath(url),
      data,
      options && { headers: options }
    );
  },

  delete: async (url: string, data: unknown, options: IOptions | any) => {
    data = getParams(data);
    const config = data ? { headers: options, data } : { headers: options };
    return axios.delete(
      options?.fullPath ? url : handleRquestFullPath(url),
      config
    );
  },
  get: async (url: string, params: unknown, options: IOptions | any) => {
    params = getParams(params);
    const config = params ? { headers: options, params } : { headers: options };
    return axios.get(
      options?.fullPath ? url : handleRquestFullPath(url),
      config
    );
  },
};

const getParams = (params: any) => {
  if (!params) {
    return null;
  }
  return params instanceof Object && !Object.keys(params).length
    ? null
    : params;
};
export default ApiHandler;
