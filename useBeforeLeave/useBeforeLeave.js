import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  if (!onBefore || typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
