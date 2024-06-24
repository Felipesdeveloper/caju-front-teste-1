import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { newUserSchemaType } from './schema';
import Button from '@/components/Buttons';
import TextField from '@/components/TextField';
import { formatCPF } from '@/utils/formatters';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, formState, handleSubmit, reset } =
    useFormContext<newUserSchemaType>();

  function onSubmit(data: newUserSchemaType) {
    console.log('data', data);
    if (!isLoading) {
      setIsLoading(true);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Controller
        name="employeeName"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextField
            id="name"
            placeholder="Nome"
            label="Nome"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={formState.errors.employeeName?.message}
          />
        )}
        defaultValue=""
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextField
            id="email"
            placeholder="Email"
            label="Email"
            type="email"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={formState.errors.email?.message}
          />
        )}
        defaultValue=""
      />
      <Controller
        name="cpf"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextField
            id="cpf"
            placeholder="CPF"
            label="CPF"
            value={value}
            onChange={(event) => onChange(formatCPF(event.target.value))}
            onBlur={onBlur}
            maxLength={14}
            error={formState.errors.cpf?.message}
          />
        )}
        defaultValue=""
      />

      <Controller
        name="admissionDate"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextField
            id="date"
            label="Data de admissão"
            type="date"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={formState.errors.admissionDate?.message}
          />
        )}
        defaultValue=""
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default Form;
