import { useEffect, useState } from "react";

type Device = "mobile" | "sm" | "tablet" | "laptop";

interface Dimension {
  width: number;
  height: number;
}

export default function useMediaQuery() {
  const [device, setDevice] = useState<Device | null>(null);

  const [dimensions, setDimensions] = useState<Dimension | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setDevice("sm");
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("laptop");
      }

      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isSm: device === "sm",
    isTablet: device === "tablet",
    isLaptop: device === "laptop",
  };
}
