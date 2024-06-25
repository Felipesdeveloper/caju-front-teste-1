import { act, fireEvent, render, screen } from '@testing-library/react';
import { createRegistration } from '@/services/registrations';
import NewUser from './NewUser';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('NewUser', () => {
  const spyCreateRegistration = createRegistration as jest.MockedFunction<
    typeof createRegistration
  >;
  it('Should call history.push when click in back', () => {
    render(<NewUser />);

    expect(mockHistoryPush).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'back' }));

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
  });

  it('Should render form', () => {
    render(<NewUser />);

    expect(screen.getByLabelText('Nome', { selector: 'input' }));
    expect(screen.getByLabelText('Email', { selector: 'input' }));
    expect(screen.getByLabelText('CPF', { selector: 'input' }));
    expect(screen.getByLabelText('Data de admissão', { selector: 'input' }));
  });

  it('Should submit form', async () => {
    render(<NewUser />);

    expect(spyCreateRegistration).not.toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText('Nome', { selector: 'input' }), {
      target: { value: 'Felipe Sousa' },
    });
    fireEvent.change(screen.getByLabelText('Email', { selector: 'input' }), {
      target: { value: 'felipe@teste.com.br' },
    });
    fireEvent.change(screen.getByLabelText('CPF', { selector: 'input' }), {
      target: { value: '78502270001' },
    });
    fireEvent.change(
      screen.getByLabelText('Data de admissão', { selector: 'input' }),
      {
        target: { value: '2023-10-22' },
      },
    );

    fireEvent.click(screen.getByRole('button', { name: 'Cadastrar' }));

    await act(async () => {
      await spyCreateRegistration;
    });

    expect(spyCreateRegistration).toHaveBeenCalledTimes(1);
    expect(spyCreateRegistration).toHaveBeenCalledWith({
      admissionDate: '22/10/2023',
      cpf: '78502270001',
      email: 'felipe@teste.com.br',
      employeeName: 'Felipe Sousa',
      status: 'REVIEW',
    });
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
  });
});
