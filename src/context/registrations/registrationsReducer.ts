import { RegistrationStateReducer } from './registrationsTypes';

export const RegistrationContext: RegistrationStateReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'registrations_loading':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'registrations_loded':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case 'registrations_error':
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

RegistrationContext.key = 'registration';
RegistrationContext.initialState = {
  isLoading: true,
  isError: false,
  data: [],
};
