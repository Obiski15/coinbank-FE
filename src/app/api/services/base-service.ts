import { AxiosError, AxiosInstance, AxiosResponse } from "axios"

import { createAxiosInstance } from "./axiosInstance"

export class BaseService {
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
        throw new Error(e.response?.data?.error?.message || e.message)
      }
      throw new Error(
        "Something went Wrong while trying to process your request"
      )
    }
  }

  public async get<IResponse>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(this.apiInstance.get(url, { params }))
  }

  public async post<IRequest, IResponse>(
    url: string,
    data?: IRequest,
    params?: Record<string, unknown>
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.post(url, data, { params })
    )
  }

  public async put<IRequest, IResponse>(
    url: string,
    data: IRequest,
    params?: Record<string, unknown>
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.put(url, data, { params })
    )
  }

  public async delete<IResponse>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<IResponse> {
    return this.handleRequest<IResponse>(
      this.apiInstance.delete(url, { params })
    )
  }
}
