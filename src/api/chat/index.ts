import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

const BASE_URL = process.env.REACT_APP_API_URL;
const CHAT_LIST = BASE_URL + URLS.CHAT;

export const getChatList = () => {
  return wrapper("get", CHAT_LIST);
};
export const getMessageList = (chatId: string) => {
  const MESSAGE_LIST = `${BASE_URL + URLS.MESSAGE}?chat_id=${chatId}`;

  return wrapper("get", MESSAGE_LIST);
};
