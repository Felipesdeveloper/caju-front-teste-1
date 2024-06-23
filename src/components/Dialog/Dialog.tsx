import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import { ButtonIcon } from '@/components/Buttons';
import Actions from './Actions';
import { Props } from './DialogTypes';
import * as S from './DialogStyles';

const Dialog = ({
  isShow,
  actions,
  content = 'bar',
  title = 'foo',
  onClose,
}: Props) => {
  function handleCloseDialog() {
    onClose();
  }

  function handleCloseKeyEvent(event: KeyboardEvent) {
    if (event.key !== 'Escape') {
      return;
    }

    handleCloseDialog();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleCloseKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleCloseKeyEvent);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container $isShow={isShow}>
      <S.Overlay $isShow={isShow} onClick={handleCloseDialog} />
      <S.WrapperContent $isShow={isShow}>
        <S.Header>
          <h2>{title}</h2>
          <ButtonIcon aria-label="fechar modal" onClick={handleCloseDialog}>
            <HiX />
          </ButtonIcon>
        </S.Header>
        {content}
        <Actions actions={actions} />
      </S.WrapperContent>
    </S.Container>
  );
};

export default Dialog;
