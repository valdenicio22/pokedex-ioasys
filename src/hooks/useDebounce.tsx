import { useRef } from 'react';

export const useDebounce = (fn: any, delay: number = 500) => {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debounceFn = (...args: any) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
  return debounceFn;
};
