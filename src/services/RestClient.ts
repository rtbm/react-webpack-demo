import { default as axios, AxiosRequestConfig } from 'axios';

export function request(method: string, options: AxiosRequestConfig) {
  return axios({
    method,
    ...options,
  })
    .then(response => ({ err: null, response }), err => ({ err }));
}

export function create(url: string, data: any, options?: AxiosRequestConfig) {
  return request('post', {
    ...options,
    url,
    data,
  });
}

export function read(url: string, options?: AxiosRequestConfig) {
  return request('get', {
    ...options,
    url,
  });
}

export function update(url: string, data: any, options?: AxiosRequestConfig) {
  return request('put', {
    ...options,
    url,
    data,
  });
}

export function remove(url: string, options?: AxiosRequestConfig) {
  return request('delete', {
    ...options,
    url,
  });
}
