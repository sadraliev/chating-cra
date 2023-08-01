import { useEffect } from "react";

const useScrollToBottom = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
};

export default useScrollToBottom;
