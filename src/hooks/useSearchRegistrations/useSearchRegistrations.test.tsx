import { act } from '@testing-library/react';
import { RenderComponetContext } from '@/utils/tests/render';
import { searchRegistrations } from '@/services/registrations';
import { RegistrationsContextInterface } from '@/context/registrations/registrationsProvider';
import { registrationsMock } from '@/services/__mocks__/registrations';
import useSearchRegistrations from './useSearchRegistrations';

function TempComponent({ cpf }: { cpf: string }) {
  const { searchRegistrations } = useSearchRegistrations();

  searchRegistrations(cpf);

  return null;
}

jest.mock('@/hooks/useDebounce', () => () => ({
  debounce: (callback: () => void) => callback(),
  suspendDebounce: jest.fn(),
}));

describe('useSearchRegistrations', () => {
  const spyDispatch = jest.fn();
  const spySearchRegistrations = searchRegistrations as jest.MockedFunction<
    typeof searchRegistrations
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

  it('should not call searchRegistrations when cpf is invalid', async () => {
    RenderComponetContext({
      children: <TempComponent cpf="11111111111" />,
      context: getContext(),
    });

    await act(async () => {
      await spySearchRegistrations;
    });

    expect(spySearchRegistrations).not.toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledTimes(2);
    expect(spyDispatch).toHaveBeenCalledWith({ type: 'registrations_loading' });
    expect(spyDispatch).toHaveBeenCalledWith({ type: 'registrations_error' });
  });

  it('should call searchRegistrations when cpf is valid', async () => {
    RenderComponetContext({
      children: <TempComponent cpf={registrationsMock[0].cpf} />,
      context: getContext(),
    });

    await act(async () => {
      await spySearchRegistrations;
    });

    expect(spySearchRegistrations).toHaveBeenCalledTimes(1);
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
      ],
      type: 'registrations_loded',
    });
  });
});
