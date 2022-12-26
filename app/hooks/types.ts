import type { AxiosRequestConfig } from "axios";
import type { QueryKey } from "@tanstack/react-query";

export interface RequestConfig extends AxiosRequestConfig {
  key: QueryKey;
}

export type SuccessType<T> = {
  data: T;
  status: number;
};

export type ErrorType = {
  status: number;
  message: string;
  code: string;
};
