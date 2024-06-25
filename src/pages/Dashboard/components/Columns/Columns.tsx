import { useContext } from 'react';
import registrationsContext from '@/context/registrations/registrationsProvider';
import RegistrationCard, {
  RegistrationCardSkeleton,
} from '../RegistrationCard';
import * as S from './ColumnsStyles';
import { Status } from '@/interface/registrations';

const allColumns: Array<{ status: Status; title: string }> = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' },
];

const Collumns = () => {
  const {
    state: { data: registrations, isLoading },
  } = useContext(registrationsContext);

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column $status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn $status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {isLoading && <RegistrationCardSkeleton />}
                {!isLoading &&
                  !!registrations.length &&
                  registrations
                    .filter(
                      (registration) => registration.status === collum.status,
                    )
                    .map((registration) => {
                      return (
                        <RegistrationCard
                          registration={registration}
                          key={registration.id}
                        />
                      );
                    })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
