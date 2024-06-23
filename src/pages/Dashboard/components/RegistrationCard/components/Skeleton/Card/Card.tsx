import SkeletonIconAndText from './IconAndText';
import * as S from '../../../RegistrationCardStyles';

const Card = () => {
  return (
    <S.Card>
      <SkeletonIconAndText />
      <SkeletonIconAndText />
      <SkeletonIconAndText />
    </S.Card>
  );
};

export default Card;
