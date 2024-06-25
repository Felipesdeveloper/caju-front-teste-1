import apiService from './config';

export function getRegistrations() {
  apiService
    .get('registrations')
    .then((response) => console.log('response', response));
}
