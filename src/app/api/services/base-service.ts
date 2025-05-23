import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios"

import { createAxiosInstance } from "./axiosInstance"

export abstract class BaseService {
  protected clientUrl: string
  protected apiInstance: AxiosInstance

  constructor(url: string, headers?: Record<string, string>) {
    this.clientUrl = url
    this.apiInstance = createAxiosInstance(this.clientUrl, headers)
  }

  protected async handleRequest<IResponse>(
    request: Promise<AxiosResponse<IResponse>>
  ): Promise<IResponse> {
    try {
      return (await request).data
    } catch (e) {
      if (e instanceof AxiosError) {
        throw e.response?.data
      }

      throw e
    }
  }

  protected async get<IResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.get(url, { ...config })
    )
  }

  protected async post<IRequest, IResponse>(
    url: string,
    data: IRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.post(url, data, { ...config })
    )
  }

  protected async patch<IRequest, IResponse>(
    url: string,
    data: IRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.patch(url, data, { ...config })
    )
  }

  protected async delete<IResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.delete(url, { ...config })
    )
  }
}
