import { screen } from '@testing-library/react';
import { RegistrationsContextInterface } from '@/context/registrations';
import { getRegistrations } from '@/services/registrations';
import { RenderComponetContext } from '@/utils/tests/render';
import Dashboard from './Dashboard';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Dashboard', () => {
  const spyGetRegistrations = getRegistrations as jest.MockedFunction<
    typeof getRegistrations
  >;
  const spyDispatch = jest.fn();

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

  it('Should call getRegistrations when initialize of component', () => {
    RenderComponetContext({
      children: <Dashboard />,
      context: getContext(),
    });

    expect(spyGetRegistrations).toHaveBeenCalledTimes(1);
  });

  it('Should call getRegistrations when initialize of component', () => {
    RenderComponetContext({
      children: <Dashboard />,
      context: getContext(),
    });

    expect(spyGetRegistrations).toHaveBeenCalledTimes(1);
  });

  it('Should has content dialog', () => {
    RenderComponetContext({
      children: <Dashboard />,
      context: getContext(),
    });

    expect(
      screen.getByText('Após clicar iremos realizar a alteração solicitada'),
    );
  });
});
