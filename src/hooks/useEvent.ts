import { useEffect } from 'react';
import { CustomEventMap } from '@/dom';

export type Props<Type extends keyof CustomEventMap> = {
  key: Type;
  onCallbackListener?(dataEvent: CustomEventMap[Type]['detail']): void;
};

const useEvent = <Type extends keyof CustomEventMap>({
  key,
  onCallbackListener,
}: Props<Type>) => {
  function dispatchEvent(message: CustomEventMap[Type]['detail']) {
    window.dispatchEvent(new CustomEvent(key, { detail: message }));
  }

  function handleListerner(event: CustomEventMap[Type]) {
    if (onCallbackListener) {
      onCallbackListener(event.detail);
    }
  }

  useEffect(() => {
    if (onCallbackListener) {
      window.addEventListener(key, handleListerner);

      return () => {
        window.removeEventListener(key, handleListerner);
      };
    }
  }, []);

  return { dispatchEvent };
};

export default useEvent;
