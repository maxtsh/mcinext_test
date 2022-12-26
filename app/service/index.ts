import Axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://ws-public.interpol.int/notices/v1/";
// const baseURL = "https://api.tvmaze.com/";
// const baseURL = "https://finalspaceapi.com/api/v0/";
// const baseURL = "https://www.breakingbadapi.com/api/"; // Error 504

const axiosInstance = Axios.create({
  timeout: 5000,
  baseURL,
});

export default async function Request(config: AxiosRequestConfig) {
  try {
    const { data, status } = await axiosInstance.request({
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
      },
      ...config,
    });

    return {
      data,
      status,
    };
  } catch (err: any) {
    if (process.env.NODE_ENV === "development") console.log(err);
    return Promise.reject({
      code: err?.code,
      message: err?.message || "Something went wrong!",
      status: err?.status,
    });
  }
}
