import TextField from '@/components/TextField';
import * as S from './NewUserStyles';
import Button, { ButtonIcon } from '@/components/Buttons';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import routes from '@/router/routes';

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <S.Container>
      <S.Card>
        <ButtonIcon onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </ButtonIcon>
        <TextField placeholder="Nome" label="Nome" />
        <TextField placeholder="Email" label="Email" type="email" />
        <TextField placeholder="CPF" label="CPF" />
        <TextField label="Data de admissão" type="date" />
        <Button onClick={() => {}}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;