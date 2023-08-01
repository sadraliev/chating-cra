import { useState, useEffect } from "react";

const useIsMobile = (threshold: number = 700): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= threshold);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= threshold);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isMobile;
};

export default useIsMobile;
