import { useEffect } from 'react';

interface UseDebounceReturnInterface {
  debounce(callback: () => void): void;
  suspendDebounce(): void;
}
let handler: NodeJS.Timeout = setTimeout(() => {}, 0);

const useDebounce = (delay = 500): UseDebounceReturnInterface => {
  function debounce(callback: () => void) {
    clearTimeout(handler);

    handler = setTimeout(() => {
      callback();
    }, delay);
  }

  function suspendDebounce() {
    clearTimeout(handler);
  }

  useEffect(() => {
    return () => {
      clearTimeout(handler);
    };
  }, []);

  return { debounce, suspendDebounce };
};

export default useDebounce;
