import { useEffect, useRef, useState } from 'react';
import useEvent from '@/hooks/useEvent';
import useTimeout from '@/hooks/useTimeout';
import useDebounce from '@/hooks/useDebounce';
import * as S from './ToastStyles';
import { cjShowToast } from '@/config/dom';

const Toast = () => {
  const messageRef = useRef<cjShowToast>({ message: '', type: 'success' });
  const [isShow, setIsShow] = useState(false);
  const addTimeout = useTimeout();
  const { debounce, suspendDebounce } = useDebounce(4000);

  useEvent({
    key: 'cj_showToast',
    onCallbackListener: (message) => handleShowToast(message),
  });

  function handleCloseToast() {
    return new Promise((resolve) => {
      setIsShow(false);

      addTimeout(() => {
        resolve({});
      }, 500);
    });
  }

  function handleShowToast(message: cjShowToast) {
    // caso tenha outra toast aberto sendo exibido sempre fecha, para abrir o próximo
    handleCloseToast().then(() => {
      messageRef.current = message;

      setIsShow(true);
    });
  }

  useEffect(() => {
    if (isShow) {
      suspendDebounce();

      debounce(() => {
        setIsShow(false);
      });
    }
  }, [isShow]);

  return (
    <S.Container $isShow={isShow} $variant={messageRef.current.type}>
      <p>{messageRef.current.message}</p>
    </S.Container>
  );
};

export default Toast;
