interface Registrations {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: 'APPROVED' | 'REVIEW' | 'REPROVED';
  cpf: string;
  id: string;
}

export type RegistrationsResponse = Registrations[];
