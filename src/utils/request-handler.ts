import axios, { AxiosRequestConfig } from 'axios';

type RequestHandlerOptions = {
  method: AxiosRequestConfig['method'],
  params?: AxiosRequestConfig['params'],
  data?: AxiosRequestConfig['data'],
  sendMethod?: string,
  apiURL: string,
  urlPrefix?: string,
  url: string,
}

const reqH = (options: RequestHandlerOptions) => {
  const requestOptions: AxiosRequestConfig = {};

  if (typeof options.method === 'undefined') {
    options.method = 'GET';
  }
  requestOptions.method = options.method;

  if (typeof options.params === 'undefined') {
    options.params = {};
  }
  requestOptions.params = options.params;

  if (options.method !== 'GET' && options.data) {
    if (typeof options.sendMethod === 'undefined') {
      options.sendMethod = 'json';
    }
    requestOptions.data = options.data;
  }

  if (options.urlPrefix) {
    options.url = `${options.urlPrefix}/${options.url}`;
  }

  requestOptions.url = options.url;

  const axiosInstance = axios.create({
    baseURL: options.apiURL,
    timeout: 1000 * 60 * 1.5,
  });

  const requestInterceptor = (config: AxiosRequestConfig) => {
    if (!window.navigator.onLine) {
      alert('No internet connection');
    }

    return config;
  };

  axiosInstance.interceptors.request.use(requestInterceptor);

  return axiosInstance(requestOptions);
};

export default reqH;
