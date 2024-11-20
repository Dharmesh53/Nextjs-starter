import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const getLocalValue = <T>(key: string, initValue: T): T => {
  if (typeof window === "undefined") {
    return initValue;
  }

  try {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue) as T;
    }
  } catch (error) {
    console.error(`Error parsing localStorage for key "${key}":`, error);
  }

  return initValue instanceof Function ? initValue() : initValue;
};

const useLocalStorage = <T>(
  key: string,
  initValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => getLocalValue(key, initValue));

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage for key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
};
export default useLocalStorage;
