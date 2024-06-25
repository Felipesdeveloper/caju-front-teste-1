import { screen, render } from '@testing-library/react';
import useTimeout from './useTimeout';

jest.spyOn(global, 'setTimeout');

function Page() {
  const addTimeout = useTimeout();

  function handleClick() {
    addTimeout(() => null, 1000);
  }

  return (
    <button type="button" onClick={handleClick}>
      test
    </button>
  );
}

describe('use timeout hook', () => {
  it('should call new timeout', () => {
    render(<Page />);
    screen.getByRole('button').click();
    expect(setTimeout).toHaveBeenCalled();
  });
});
