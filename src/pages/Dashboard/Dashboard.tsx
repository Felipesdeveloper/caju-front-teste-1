import { useState, useRef } from 'react';
import Dialog from '@/components/Dialog';
import useEvent from '@/hooks/useEvent';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import Collumns from './components/Columns';
import * as S from './DashboardStyles';
import SearchBar from './components/Searchbar';

const DashboardPage = () => {
  useLoadRegistrations();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const registrationActionRef = useRef({ id: '', action: '' });
  useEvent({
    key: 'cj_changeStatus',
    onCallbackListener: (message) => {
      // @TODO: corrigir essa tipagem
      registrationActionRef.current = message;
      setIsShowDialog(true);
    },
  });

  return (
    <S.Container>
      <SearchBar />
      <Collumns />
      <Dialog
        isShow={isShowDialog}
        title="Tem certeza que deseja realizar essa ação?"
        content="Após clicar iremos realizar a alteração solitada"
        actions={[
          {
            text: 'cancelar',
            type: 'rejected',
            onClick: () =>
              console.log('cancelar', registrationActionRef.current),
          },
          {
            text: 'ok',
            type: 'approved',
            onClick: () => console.log('ok', registrationActionRef.current),
          },
        ]}
        onClose={() => setIsShowDialog(false)}
      />
    </S.Container>
  );
};
export default DashboardPage;
