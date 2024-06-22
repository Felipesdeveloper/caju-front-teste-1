import { Props } from './HeaderTypes';
import * as S from './HeaderStyles';

const Header = ({ children }: Props) => {
  return <S.Header>{children}</S.Header>;
};

export default Header;
