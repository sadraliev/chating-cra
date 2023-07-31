import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

const BASE_URL = process.env.REACT_APP_API_URL;
const LIST = BASE_URL + URLS.MESSAGES;

export const getChatList = () => {
  return wrapper("get", LIST);
};
