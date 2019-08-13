import axios, { AxiosPromise } from 'axios'
import { baseURL } from './config'

export function get(url: string): AxiosPromise {
  return axios({
    method: 'get',
    url,
    baseURL,
  })
}
