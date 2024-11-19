export const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
) => {
  let inThrottle = false;

  return (...args: T) => {
    if (inThrottle === false) {
      func.call(this, ...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
};

const s = "test";
console.log("test");
