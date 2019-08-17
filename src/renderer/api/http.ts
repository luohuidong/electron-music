import axios, { AxiosPromise } from 'axios'
import { baseURL } from './config'

interface GetParams {
  url: string;
  params?: object;
  baseURL?: string;
}

/**
 * axios get 封装
 * @param options get 参数选项
 */
export function get(options: GetParams): AxiosPromise {
  const { url, params } = options

  return axios({
    baseURL,
    method: 'get',
    url,
    params,
  })
}

export function post(url: string, data: object): AxiosPromise {
  return axios({
    method: 'post',
    url,
    data
  })
}
