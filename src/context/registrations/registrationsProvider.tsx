import { Dispatch, createContext, useReducer } from 'react';

import { RegistrationContext } from './registrationsReducer';
import { DispatchType, RegistrationState } from './registrationsTypes';

interface RegistrationContextProvider {
  children: React.ReactNode;
}

export interface RegistrationsContextInterface {
  state: RegistrationState;
  dispatch: Dispatch<DispatchType>;
}
const RegistrationsContext = createContext({} as RegistrationsContextInterface);

RegistrationsContext.Provider;

export function RegistrationsProvider({
  children,
}: RegistrationContextProvider) {
  const [state, dispatch] = useReducer(
    RegistrationContext,
    RegistrationContext.initialState,
  );

  return (
    <RegistrationsContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationsContext.Provider>
  );
}

export default RegistrationsContext;
