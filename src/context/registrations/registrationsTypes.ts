import { RegistrationsResponse } from '@/interface/registrations';

type DispatchRegistrationsLoading = {
  type: 'registrations_loading';
  payload?: null;
};

type DispatchRegistrationsError = {
  type: 'registrations_error';
  payload?: null;
};

type DispatchRegistrationsLoded = {
  type: 'registrations_loded';
  payload: RegistrationsResponse;
};

export type DispatchType =
  | DispatchRegistrationsLoading
  | DispatchRegistrationsError
  | DispatchRegistrationsLoded;

export interface RegistrationState {
  isLoading: boolean;
  isError: boolean;
  data: RegistrationsResponse;
}

export interface RegistrationStateReducer {
  (state: RegistrationState, action: DispatchType): RegistrationState;
  key: 'registration';
  initialState: RegistrationState;
}
