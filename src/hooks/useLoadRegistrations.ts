import { useContext, useEffect } from 'react';
import registrationsContext from '@/context/registrations/registrationsProvider';
import { getRegistrations } from '@/services/registrations';

const useLoadRegistrations = (type: 'onload' | 'lazy' = 'onload') => {
  const { dispatch } = useContext(registrationsContext);

  const fetchRegistrations = async () => {
    dispatch({ type: 'registrations_loading' });

    try {
      const response = await getRegistrations();

      // Adicionado apenas para conseguirmos ver o loading, não iria para prod essa setTimeout
      setTimeout(() => {
        dispatch({
          type: 'registrations_loded',
          payload: response,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: 'registrations_error',
      });
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
