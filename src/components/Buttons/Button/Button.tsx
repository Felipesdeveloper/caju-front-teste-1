import { HiOutlineRefresh } from 'react-icons/hi';
import { Props } from './ButtonTypes';
import * as S from './ButtonStyles';

const Button = ({ children, $variant, isLoading, ...props }: Props) => {
  return (
    <S.Button $variant={$variant} {...props}>
      {!isLoading && children}
      {isLoading && (
        <S.WrapperLoading>
          <HiOutlineRefresh />
        </S.WrapperLoading>
      )}
    </S.Button>
  );
};

export default Button;
