import { screen } from '@testing-library/react';
import { RegistrationsContextInterface } from '@/context/registrations';
import { registrationsMock } from '@/services/__mocks__/registrations';
import { RenderComponetContext } from '@/utils/tests/render';
import Columns from './Columns';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../RegistrationCard', () => ({
  __esModule: true,
  default: () => {
    return <p>RegistrationCard</p>;
  },
  RegistrationCardSkeleton: () => {
    return <p>RegistrationCardSkeleton</p>;
  },
}));

describe('Columns', () => {
  const spyDispatch = jest.fn();

  function getContext(): RegistrationsContextInterface {
    return {
      state: {
        isLoading: false,
        isError: false,
        data: registrationsMock,
      },
      dispatch: spyDispatch,
    };
  }

  it('Should render RegistrationCard', () => {
    RenderComponetContext({
      children: <Columns />,
      context: getContext(),
    });

    expect(screen.queryByText('RegistrationCardSkeleton')).toEqual(null);
    expect(screen.getAllByText('RegistrationCard').length).toEqual(3);
  });
  it('Should render RegistrationCardSkeleton', () => {
    const contextTemp = getContext();
    contextTemp.state.isLoading = true;

    RenderComponetContext({
      children: <Columns />,
      context: contextTemp,
    });

    expect(screen.queryByText('RegistrationCard')).toEqual(null);
    expect(screen.getAllByText('RegistrationCardSkeleton').length).toEqual(3);
  });
});
