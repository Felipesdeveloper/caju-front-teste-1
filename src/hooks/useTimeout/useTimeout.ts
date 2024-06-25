import { useEffect, useRef } from 'react';

const useTimeout = () => {
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const addTimeout = (fn: () => void, timeout: number) => {
    const timeoutTemp = setTimeout(fn, timeout);

    timeoutsRef.current.push(timeoutTemp);

    return timeoutTemp;
  };

  useEffect(
    () => () => timeoutsRef?.current?.forEach((item) => clearTimeout(item)),
    [],
  );

  return addTimeout;
};

export default useTimeout;
