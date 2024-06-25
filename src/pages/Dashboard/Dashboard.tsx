import { useState } from 'react';
import Dialog from '@/components/Dialog';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import Collumns from './components/Columns';
import * as S from './DashboardStyles';
import SearchBar from './components/Searchbar';

const DashboardPage = () => {
  useLoadRegistrations();
  const [isShowDialog, setIsShowDialog] = useState(false);

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
            onClick: () => console.log('cancelar'),
          },
          { text: 'ok', type: 'approved', onClick: () => console.log('ok') },
        ]}
        onClose={() => setIsShowDialog(false)}
      />
    </S.Container>
  );
};
export default DashboardPage;
