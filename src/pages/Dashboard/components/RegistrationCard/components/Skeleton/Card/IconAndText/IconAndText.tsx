import { SkeletonRow } from '@/components/Skeleton';
import * as S from '../../../../RegistrationCardStyles';

const IconAndText = () => {
  return (
    <S.IconAndText>
      <SkeletonRow width={20} height={20} />
      <SkeletonRow width={150} height={20} />
    </S.IconAndText>
  );
};

export default IconAndText;
