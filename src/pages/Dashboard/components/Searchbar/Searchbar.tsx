import { ChangeEvent, useRef, useState } from 'react';
import { HiRefresh } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Button, { ButtonIcon } from '@/components/Buttons';
import TextField from '@/components/TextField';
import routes from '@/router/routes';
import useLoadRegistrations from '@/hooks/useLoadRegistrations';
import useSearchRegistrations from '@/hooks/useSearchRegistrations';
import { formatCPF } from '@/utils/formatters';
import * as S from './SearchbarStyles';
import { isCPFValid } from '@/utils/validate';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const hasFilterRef = useRef(false);
  const { fetchRegistrations } = useLoadRegistrations('lazy');
  const { searchRegistrations } = useSearchRegistrations();
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleSearchRegistrations = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchTerm(formatCPF(value));

    if (value.length === 0 && hasFilterRef.current) {
      hasFilterRef.current = false;
      fetchRegistrations();
    }

    if (isCPFValid(value)) {
      hasFilterRef.current = true;
      searchRegistrations(value);
    }
  };

  return (
    <S.Container>
      <TextField
        type="search"
        placeholder="Digite um CPF válido"
        onChange={handleSearchRegistrations}
        value={searchTerm}
      />
      <S.Actions>
        <ButtonIcon
          aria-label="refetch"
          onClick={() => {
            fetchRegistrations();
            setSearchTerm('');
          }}
        >
          <HiRefresh />
        </ButtonIcon>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
