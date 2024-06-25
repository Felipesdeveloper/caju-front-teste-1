import { useState, useRef } from 'react';
import Dialog from '@/components/Dialog';
import useEvent from '@/hooks/useEvent';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import { updateRegistration } from '@/services/registrations';
import { Registration } from '@/interface/registrations';
import Collumns from './components/Columns';
import * as S from './DashboardStyles';
import SearchBar from './components/Searchbar';

const DashboardPage = () => {
  const { fetchRegistrations } = useLoadRegistrations();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const registrationActionRef = useRef<Registration>();
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
            onClick: () => {
              setIsShowDialog(false);
            },
          },
          {
            text: 'ok',
            type: 'approved',
            onClick: () => {
              updateRegistration(registrationActionRef.current!).then(() => {
                registrationActionRef.current = undefined;
                fetchRegistrations();
                setIsShowDialog(false);
              });
            },
          },
        ]}
        onClose={() => setIsShowDialog(false)}
      />
    </S.Container>
  );
};
export default DashboardPage;
