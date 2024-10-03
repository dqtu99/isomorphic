import { useEffect, useState } from "react";

type SizeWindow = {
  width: number;
  height: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<SizeWindow>({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
