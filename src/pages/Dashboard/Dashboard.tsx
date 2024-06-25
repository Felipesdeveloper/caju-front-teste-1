import { useState, useRef } from 'react';
import Dialog from '@/components/Dialog';
import { cjChangeStatus } from '@/dom';
import useEvent from '@/hooks/useEvent';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import {
  deleteRegistration,
  updateRegistration,
} from '@/services/registrations';
import Collumns from './components/Columns';
import * as S from './DashboardStyles';
import SearchBar from './components/Searchbar';

const DashboardPage = () => {
  const { fetchRegistrations } = useLoadRegistrations();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const registrationActionRef = useRef<cjChangeStatus>();
  const { dispatchEvent } = useEvent<'cj_showToast'>({
    key: 'cj_showToast',
  });
  useEvent<'cj_changeStatus'>({
    key: 'cj_changeStatus',
    onCallbackListener: (message) => {
      registrationActionRef.current = message;
      setIsShowDialog(true);
    },
  });

  function handleSuccess() {
    registrationActionRef.current = undefined;
    fetchRegistrations();
    setIsShowDialog(false);
    dispatchEvent({
      message: 'Atualização concluida com sucesso',
      type: 'success',
    });
  }

  function handleError() {
    dispatchEvent({
      message: 'erro ao concluir a atualização tente novamente',
      type: 'error',
    });
  }

  return (
    <S.Container>
      <SearchBar />
      <Collumns />
      <Dialog
        isShow={isShowDialog}
        title="Tem certeza que deseja realizar essa ação?"
        content="Após clicar iremos realizar a alteração solicitada"
        actions={[
          {
            text: 'cancelar',
            type: 'rejected',
            onClick: () => {
              setIsShowDialog(false);
            },
            isLoading: false,
          },
          {
            text: 'ok',
            type: 'approved',
            onClick: () => {
              if (registrationActionRef.current) {
                if (registrationActionRef.current.action === 'delete') {
                  setIsLoading(true);
                  deleteRegistration(registrationActionRef.current.data)
                    .then(() => {
                      handleSuccess();
                    })
                    .catch(() => {
                      handleError();
                    })
                    .finally(() => setIsLoading(false));

                  return;
                }

                setIsLoading(true);
                updateRegistration(registrationActionRef.current.data)
                  .then(() => {
                    registrationActionRef.current = undefined;
                    handleSuccess();
                  })
                  .catch(() => {
                    handleError();
                  })
                  .finally(() => setIsLoading(false));
              }
            },
            isLoading,
          },
        ]}
        onClose={() => setIsShowDialog(false)}
      />
    </S.Container>
  );
};
export default DashboardPage;
