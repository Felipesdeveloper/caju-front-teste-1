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
  useEvent({
    key: 'cj_changeStatus',
    onCallbackListener: (message) => {
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
                      registrationActionRef.current = undefined;
                      fetchRegistrations();
                      setIsShowDialog(false);
                    })
                    .finally(() => setIsLoading(false));

                  return;
                }

                setIsLoading(true);
                updateRegistration(registrationActionRef.current.data)
                  .then(() => {
                    registrationActionRef.current = undefined;
                    fetchRegistrations();
                    setIsShowDialog(false);
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
