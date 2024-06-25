export type Status = 'APPROVED' | 'REVIEW' | 'REPROVED';

export interface Registration {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: Status;
  cpf: string;
  id: string;
}

export type RegistrationsResponse = Registration[];
