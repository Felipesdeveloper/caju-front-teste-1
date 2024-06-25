import { render, screen, fireEvent } from '@testing-library/react';
import { CustomEventMap, cjChangeStatus, cjShowToast } from '@/config/dom';
import { registrationsMock } from '@/services/__mocks__/registrations';
import useEvent from './useEvent';

function TempComponent({
  eventName,
  onCallbackListener,
}: {
  eventName: keyof CustomEventMap;
  onCallbackListener(dataEvent: any): void;
}) {
  const { dispatchEvent } = useEvent({
    key: eventName,
    onCallbackListener,
  });

  const message: cjChangeStatus | cjShowToast =
    eventName === 'cj_changeStatus'
      ? { action: 'update', data: registrationsMock[0] }
      : { message: 'teste', type: 'success' };

  return <button onClick={() => dispatchEvent(message)}>send event</button>;
}

describe('useEvent', () => {
  const spyOnCallbackListener = jest.fn();

  it('should listener of event "cj_changeStatus"', () => {
    render(
      <TempComponent
        eventName="cj_changeStatus"
        onCallbackListener={spyOnCallbackListener}
      />,
    );

    expect(spyOnCallbackListener).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'send event' }));

    expect(spyOnCallbackListener).toHaveBeenCalledTimes(1);
    expect(spyOnCallbackListener).toHaveBeenCalledWith({
      action: 'update',
      data: {
        admissionDate: '22/10/2023',
        cpf: '56642105087',
        email: 'luiz@caju.com.br',
        employeeName: 'Luiz Filho',
        id: '3',
        status: 'REPROVED',
      },
    });
  });

  it('should listener of event "cj_showToast"', () => {
    render(
      <TempComponent
        eventName="cj_showToast"
        onCallbackListener={spyOnCallbackListener}
      />,
    );

    expect(spyOnCallbackListener).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'send event' }));

    expect(spyOnCallbackListener).toHaveBeenCalledTimes(1);
    expect(spyOnCallbackListener).toHaveBeenCalledWith({
      message: 'teste',
      type: 'success',
    });
  });
});
