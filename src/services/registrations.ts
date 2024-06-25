import { RegistrationsResponse } from '@/interface/registrations';
import apiService from './config';

export function getRegistrations(): Promise<RegistrationsResponse> {
  return apiService.get('registrations');
}
