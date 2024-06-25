import { render } from '@testing-library/react';
import { RegistrationsContextInterface } from '@/context/registrations';
import RegistrationsContext from '@/context/registrations/registrationsProvider';
import { ReactNode } from 'react';

export function RenderComponetContext({
  children,
  context,
}: {
  children: ReactNode;
  context: RegistrationsContextInterface;
}) {
  return render(
    <RegistrationsContext.Provider value={context}>
      {children}
    </RegistrationsContext.Provider>,
  );
}
