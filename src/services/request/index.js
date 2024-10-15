import axios from 'axios'
import { BASE_URL, TIMEOUT } from './constants'

class HyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.instance.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.instance.request({ ...config, method: 'post' })
  }
}

export default new HyRequest(BASE_URL, TIMEOUT)
