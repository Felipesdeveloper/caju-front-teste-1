import { Registration, RegistrationsResponse } from '@/interface/registrations';
import { regexOnlyNumbers } from '@/utils/formatters';
import apiService from './config';

let AbortControllerGetRegistrations: AbortController;
let AbortControllerSearchRegistrations: AbortController;

export function getRegistrations(): Promise<RegistrationsResponse> {
  if (AbortControllerGetRegistrations) {
    AbortControllerGetRegistrations.abort();
  }

  AbortControllerGetRegistrations = new AbortController();
  const { signal } = AbortControllerGetRegistrations;

  return apiService.get('registrations', { signal });
}

export function updateRegistration(
  registration: Registration,
): Promise<RegistrationsResponse> {
  return apiService.put(`registrations/${registration.id}`, registration);
}

export function searchRegistrations(
  cpf: string,
): Promise<RegistrationsResponse> {
  if (AbortControllerSearchRegistrations) {
    AbortControllerSearchRegistrations.abort();
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
  return apiService.delete(`registrations/${registration.id}`);
}
