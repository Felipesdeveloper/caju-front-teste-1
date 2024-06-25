import { act } from '@testing-library/react';
import { RenderComponetContext } from '@/utils/tests/render';
import { getRegistrations } from '@/services/registrations';
import { RegistrationsContextInterface } from '@/context/registrations/registrationsProvider';
import useLoadRegistrations from './useLoadRegistrations';

function TempComponent({ type = 'lazy' }: { type?: 'lazy' | 'onload' }) {
  useLoadRegistrations(type);

  return null;
}

describe('useLoadRegistrations', () => {
  const spyDispatch = jest.fn();
  const spyGetRegistrations = getRegistrations as jest.MockedFunction<
    typeof getRegistrations
  >;

  function getContext(): RegistrationsContextInterface {
    return {
      state: {
        isLoading: false,
        isError: false,
        data: [],
      },
      dispatch: spyDispatch,
    };
  }

  it('should not call fetchRegistrations when lazy', async () => {
    RenderComponetContext({
      children: <TempComponent />,
      context: getContext(),
    });

    await act(async () => {
      await spyGetRegistrations;
    });

    expect(spyGetRegistrations).not.toHaveBeenCalled();
    expect(spyDispatch).not.toHaveBeenCalled();
  });

  it('should call fetchJourneys when onload', async () => {
    RenderComponetContext({
      children: <TempComponent type="onload" />,
      context: getContext(),
    });

    await act(async () => {
      await spyGetRegistrations;
    });

    expect(spyGetRegistrations).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledTimes(2);
    expect(spyDispatch).toHaveBeenCalledWith({ type: 'registrations_loading' });
    expect(spyDispatch).toHaveBeenCalledWith({
      payload: [
        {
          admissionDate: '22/10/2023',
          cpf: '56642105087',
          email: 'luiz@caju.com.br',
          employeeName: 'Luiz Filho',
          id: '3',
          status: 'REPROVED',
        },
        {
          admissionDate: '22/10/2023',
          cpf: '78502270001',
          email: 'filipe@caju.com.br',
          employeeName: 'Filipe Marins',
          id: '1',
          status: 'APPROVED',
        },
        {
          admissionDate: '22/10/2023',
          cpf: '78502270001',
          email: 'jose@caju.com.br',
          employeeName: 'José Leão',
          id: '2',
          status: 'REPROVED',
        },
      ],
      type: 'registrations_loded',
    });
  });
});
