import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import type { CustomResponseType } from '#/axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30 * 1000,
  // 请求是否携带cookie
  withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以处理token等
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status < 200 || status >= 300) {
      // 统一处理http错误，或者处理后抛到业务代码 TODO
    }

    return response
  },
  (err) => {
    const { status } = err.response

    // 根据返回的http状态码做不同的处理，比如错误提示等 TODO
    switch (status) {
      case 401:
        // 鉴权失败
        break
      case 403:
        // 没有权限
        break
      case 500:
        // 服务端错误
        break

      default:
        break
    }

    return Promise.reject(err)
  }
)

// 封装一层以更好的统一定义接口返回的类型
const request = <T>(
  config: AxiosRequestConfig
): Promise<CustomResponseType<T>> => {
  return new Promise((resolve, reject) => {
    service
      .request<CustomResponseType<T>>(config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err: Error | AxiosError) => {
        reject(err)
      })
  })
}

export default request
