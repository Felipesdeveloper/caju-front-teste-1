import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import registrationsContext from '@/context/registrations/registrationsProvider';
import { getRegistrations } from '@/services/registrations';

const useLoadRegistrations = (type: 'onload' | 'lazy' = 'onload') => {
  const { state, dispatch } = useContext(registrationsContext);
  const { isLoading } = state;

  const fetchRegistrations = async () => {
    dispatch({ type: 'registrations_loading' });

    if (!isLoading) {
      try {
        const response = await getRegistrations();

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
    }
  };

  useEffect(() => {
    if (type === 'onload') {
      fetchRegistrations();
    }
  }, []);

  return { fetchRegistrations };
};

export default useLoadRegistrations;
