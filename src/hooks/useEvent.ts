import { useEffect } from 'react';
import { CustomEventMap } from '@/dom';

export type Props = {
  key: 'cj_changeStatus';
  onCallbackListener?<Type>(dataEvent: CustomEvent<Type>['detail']): void;
};

const useEvent = ({ key, onCallbackListener }: Props) => {
  function dispatchEvent(message: CustomEventMap[`${typeof key}`]['detail']) {
    window.dispatchEvent<typeof key>(new CustomEvent(key, { detail: message }));
  }

  function handleListerner(event: CustomEventMap[`${typeof key}`]) {
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
