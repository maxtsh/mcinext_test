import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import API from "service/index";
import type { RequestConfig, SuccessType, ErrorType } from "./types";

const useReactQuery = <ResType>(
  config: RequestConfig,
  options?: UseQueryOptions<SuccessType<ResType>, ErrorType>,
) => {
  const { key, ...restConfig } = config;

  const queryResult = useQuery<SuccessType<ResType>, ErrorType>(
    key,
    () => API(restConfig),
    options,
  );
  return queryResult;
};
export default useReactQuery;
