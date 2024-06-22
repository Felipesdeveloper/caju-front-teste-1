import { Props } from './ButtonSmallTypes';
import * as S from './ButtonSmallStyles';

const ButtonSmall = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default ButtonSmall;
