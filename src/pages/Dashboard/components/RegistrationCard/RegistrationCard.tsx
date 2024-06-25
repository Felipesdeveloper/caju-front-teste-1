import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { ButtonSmall } from '@/components/Buttons';
import useEvent from '@/hooks/useEvent';
import { Props } from './RegistrationCardTypes';
import * as S from './RegistrationCardStyles';

const RegistrationCard = ({ registration }: Props) => {
  const { dispatchEvent } = useEvent({ key: 'cj_changeStatus' });
  const { employeeName, email, admissionDate, status } = registration;

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {status === 'REVIEW' && (
          <>
            <ButtonSmall
              bgcolor="rgb(255, 145, 154)"
              onClick={() =>
                dispatchEvent({ ...registration, status: 'REPROVED' })
              }
            >
              Reprovar
            </ButtonSmall>
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() =>
                dispatchEvent({ ...registration, status: 'APPROVED' })
              }
            >
              Aprovar
            </ButtonSmall>
          </>
        )}
        {['REPROVED', 'APPROVED'].includes(status) && (
          <ButtonSmall
            bgcolor="#ff8858"
            onClick={() => dispatchEvent({ ...registration, status: 'REVIEW' })}
          >
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
