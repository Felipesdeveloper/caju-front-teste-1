import { Props } from './ButtonIconTypes';
import * as S from './ButtonIconStyles';

const ButtonIcon = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default ButtonIcon;
