import { Props } from './ButtonTypes';
import * as S from './ButtonStyles';

const Button = ({ children, variant, ...props }: Props) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
