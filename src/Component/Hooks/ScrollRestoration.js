import { useEffect } from "react";

export const useScrollRestoration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
