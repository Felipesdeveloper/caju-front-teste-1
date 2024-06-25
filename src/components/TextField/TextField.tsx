import { Props } from './TextFieldTypes';
import * as S from './TextFieldStyles';

const TextField = ({ error, label, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <S.Input {...props} />
      <span style={{ fontSize: 12, color: 'red' }}>{error}</span>
    </div>
  );
};

export default TextField;
