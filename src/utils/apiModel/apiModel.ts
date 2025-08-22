import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_BASE_URL } from "@/config";

const createApiInstance = (baseURL: string): AxiosInstance =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const apiModel: AxiosInstance = createApiInstance(API_BASE_URL);

// return data interceptor
const responseInterceptor = (response: AxiosResponse) => response.data;

// error interceptor
const errorInterceptor = async (error: any) => {
  if (!error.response) {
    return Promise.reject({
      status: "network_error",
      message: "Network error. Please try again later.",
    });
  }

  const { status, data } = error.response;
  const errorMessage = data?.message;

  if (status === 401) {
    // await signOut();
  } else if (status === 422) {
    const responseData = error?.response?.data as unknown as {
      errors: any;
    };
    const errors: any = {};

    for (const key in responseData?.errors) {
      const error =
        typeof responseData?.errors[key] === "string"
          ? responseData?.errors[key]
          : responseData?.errors[key][0];

      errors[key] = error;
    }

    throw errors;
  }

  return Promise.reject({
    status,
    message: errorMessage,
    errors: data?.errors || null,
  });
};

[apiModel].forEach((instance) => {
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
});
