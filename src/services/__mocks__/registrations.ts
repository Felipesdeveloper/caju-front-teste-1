import { Registration, RegistrationsResponse } from '@/interface/registrations';

export const registrationsMock: RegistrationsResponse = [
  {
    admissionDate: '22/10/2023',
    email: 'luiz@caju.com.br',
    employeeName: 'Luiz Filho',
    status: 'REPROVED',
    cpf: '56642105087',
    id: '3',
  },
  {
    id: '1',
    admissionDate: '22/10/2023',
    email: 'filipe@caju.com.br',
    employeeName: 'Filipe Marins',
    status: 'APPROVED',
    cpf: '78502270001',
  },
  {
    id: '2',
    admissionDate: '22/10/2023',
    email: 'jose@caju.com.br',
    employeeName: 'José Leão',
    status: 'REPROVED',
    cpf: '78502270001',
  },
];

export const getRegistrations = jest.fn().mockResolvedValue(registrationsMock);

export const updateRegistration = jest
  .fn()
  .mockResolvedValue((registration: Registration) => registration);

export const searchRegistrations = jest
  .fn()
  .mockImplementation((cpf: string) =>
    Promise.resolve(
      registrationsMock.filter((registration) => registration.cpf === cpf),
    ),
  );

export const deleteRegistration = jest.fn();

export const createRegistration = jest
  .fn()
  .mockResolvedValue((registration: Registration) => ({
    ...registration,
    id: '123',
  }));
