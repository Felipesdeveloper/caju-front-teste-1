import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import newUserSchema, { newUserSchemaType } from './schema';
import Form from './Form';

const FormContainer = () => {
  const newUserHook = useForm<newUserSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(newUserSchema),
  });

  return (
    <FormProvider {...newUserHook}>
      <Form />
    </FormProvider>
  );
};

export default FormContainer;
