import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { ButtonSmall } from '@/components/Buttons';
import { Props } from './RegistrationCardTypes';
import * as S from './RegistrationCardStyles';

const RegistrationCard = (props: Props) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {props.data.status === 'REVIEW' && (
          <>
            <ButtonSmall bgcolor="rgb(255, 145, 154)">Reprovar</ButtonSmall>
            <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
          </>
        )}
        {['REPROVED', 'APPROVED'].includes(props.data.status) && (
          <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>
        )}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
