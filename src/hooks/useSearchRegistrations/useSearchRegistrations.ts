import { useContext } from 'react';
import { AxiosError } from 'axios';
import registrationsContext from '@/context/registrations/registrationsProvider';
import useDebounce from '@/hooks/useDebounce';
import { searchRegistrations as searchRegistrationsService } from '@/services/registrations';
import { isCPFValid } from '@/utils/validate';

const useSearchRegistrations = () => {
  const { dispatch } = useContext(registrationsContext);
  const { debounce, suspendDebounce } = useDebounce(500);

  const searchRegistrations = async (cpf: string) => {
    dispatch({ type: 'registrations_loading' });

    suspendDebounce();

    debounce(async () => {
      try {
        if (!isCPFValid(cpf)) {
          throw new Error('Informe um cpf valido');
        }

        const response = await searchRegistrationsService(cpf);

        dispatch({
          type: 'registrations_loded',
          payload: response,
        });
      } catch (error) {
        const err = error as AxiosError;

        if (err?.code === 'ERR_CANCELED') {
          return;
        }

        dispatch({
          type: 'registrations_error',
        });
      }
    });
  };

  return { searchRegistrations };
};

export default useSearchRegistrations;
