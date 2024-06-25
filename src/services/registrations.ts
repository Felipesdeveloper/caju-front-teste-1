import { Registration, RegistrationsResponse } from '@/interface/registrations';
import { regexOnlyNumbers } from '@/utils/formatters';
import apiService from './config';

let AbortControllerGetRegistrations: AbortController;
let AbortControllerSearchRegistrations: AbortController;

const uri = 'registrations';

export function getRegistrations(): Promise<RegistrationsResponse> {
  if (AbortControllerGetRegistrations) {
    AbortControllerGetRegistrations.abort();
  }

  if (AbortControllerSearchRegistrations) {
    AbortControllerSearchRegistrations.abort();
  }

  AbortControllerGetRegistrations = new AbortController();
  const { signal } = AbortControllerGetRegistrations;

  return apiService.get(uri, { signal });
}

export function updateRegistration(
  registration: Registration,
): Promise<RegistrationsResponse> {
  return apiService.put(`${uri}/${registration.id}`, registration);
}

export function searchRegistrations(
  cpf: string,
): Promise<RegistrationsResponse> {
  if (AbortControllerSearchRegistrations) {
    AbortControllerSearchRegistrations.abort();
  }

  if (AbortControllerGetRegistrations) {
    AbortControllerGetRegistrations.abort();
  }

  AbortControllerSearchRegistrations = new AbortController();

  const { signal } = AbortControllerSearchRegistrations;
  const uri = 'registrations';

  return apiService.get(`${uri}?cpf=${cpf.replace(regexOnlyNumbers, '')}`, {
    signal,
  });
}

export function deleteRegistration(
  registration: Registration,
): Promise<RegistrationsResponse> {
  return apiService.delete(`${uri}/${registration.id}`);
}

interface CreateRegistration extends Omit<Registration, 'id'> {}

export function createRegistration(
  registration: CreateRegistration,
): Promise<RegistrationsResponse> {
  return apiService.post(`${uri}`, registration);
}
