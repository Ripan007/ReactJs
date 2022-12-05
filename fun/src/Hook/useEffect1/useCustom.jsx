import { useEffect } from "react";
// we have to "use"  keyword to create custom hook
const useCustom = (count) => {
  useEffect(() => {
    if (count > 1) {
      document.title = `chats${count}`;
    } else {
      document.title = ` chats`;
    }
  }, [count]);
};

export default useCustom;
