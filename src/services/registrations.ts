import { Registration, RegistrationsResponse } from '@/interface/registrations';
import apiService from './config';

export function getRegistrations(): Promise<RegistrationsResponse> {
  return apiService.get('registrations');
}

export function updateRegistration(
  registration: Registration,
): Promise<RegistrationsResponse> {
  return apiService.put(`registrations/${registration.id}`, registration);
}
