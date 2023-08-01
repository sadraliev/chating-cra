import axios from "axios";

const checkResponse = (response: any) => {
  return response.data.response;
};
const catchError = (error: any) => error;

const headers = {
  version: "0.0",
};

export const wrapper = (
  method: "post" | "get" | "put" | "delete",
  url: string,
  data?: any
) =>
  axios
    .request({ method, url, data, headers })
    .then(checkResponse)
    .catch(catchError);
