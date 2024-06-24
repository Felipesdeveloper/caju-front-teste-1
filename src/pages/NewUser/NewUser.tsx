import * as S from './NewUserStyles';
import { ButtonIcon } from '@/components/Buttons';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import routes from '@/router/routes';
import Form from './Form';

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  /**
   * exibir o toast para caso de sucesso ou de erro
   * Erro mostrar o toast no form ainda aberto, sucesso redirecionar e depois exibir o toast
   */
  return (
    <S.Container>
      <S.Card>
        <ButtonIcon onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </ButtonIcon>
        <Form />
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
