import { Props } from './ButtonTypes';
import * as S from './ButtonStyles';

const Button = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
