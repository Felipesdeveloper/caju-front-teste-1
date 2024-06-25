import { HiRefresh } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Button, { ButtonIcon } from '@/components/Buttons';
import TextField from '@/components/TextField';
import routes from '@/router/routes';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import * as S from './SearchbarStyles';

const SearchBar = () => {
  const { fetchRegistrations } = useLoadRegistrations('lazy');
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <ButtonIcon aria-label="refetch" onClick={() => fetchRegistrations()}>
          <HiRefresh />
        </ButtonIcon>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
