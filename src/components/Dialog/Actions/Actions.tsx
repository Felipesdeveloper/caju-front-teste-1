import { Props } from './ActionsTypes';
import Button from '@/components/Buttons';
import * as S from './ActionsStyles';

const Actions = ({ actions }: Props) => {
  return (
    <S.WrapperActions>
      {actions.map((action) => (
        <Button
          variant={action.type === 'rejected' ? 'secondary' : 'primary'}
          key={`action-dialog-${action.text}`}
          onClick={action.onClick}
        >
          {action.text}
        </Button>
      ))}
    </S.WrapperActions>
  );
};

export default Actions;
