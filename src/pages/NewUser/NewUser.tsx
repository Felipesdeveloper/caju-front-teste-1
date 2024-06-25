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
