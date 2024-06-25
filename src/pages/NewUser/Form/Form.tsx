import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Controller, useFormContext } from 'react-hook-form';
import { newUserSchemaType } from './schema';
import Button from '@/components/Buttons';
import TextField from '@/components/TextField';
import useEvent from '@/hooks/useEvent';
import {
  formatCPF,
  formatDateToPatternRequested,
  regexOnlyNumbers,
} from '@/utils/formatters';
import routes from '@/router/routes';
import { createRegistration } from '@/services/registrations';

const Form = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { control, formState, handleSubmit, reset } =
    useFormContext<newUserSchemaType>();
  const { dispatchEvent } = useEvent<'cj_showToast'>({
    key: 'cj_showToast',
  });

  function goToHome() {
    history.push(routes.dashboard);
  }

  function payloadFormated(data: newUserSchemaType) {
    return {
      ...data,
      cpf: data.cpf.replace(regexOnlyNumbers, ''),
      admissionDate: formatDateToPatternRequested(data.admissionDate),
    };
  }

  function onSubmit(data: newUserSchemaType) {
    if (!isLoading) {
      setIsLoading(true);
      createRegistration({
        ...payloadFormated({ ...data }),
        status: 'REVIEW',
      })
        .then(() => {
          reset();
          goToHome();
          dispatchEvent({
            message: 'Cadastro realizado com sucesso',
            type: 'success',
          });
        })
        .catch(() => {
          dispatchEvent({
            message: 'erro ao concluir o cadastro tente novamente',
            type: 'error',
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
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
      <Button type="submit" disabled={isLoading} isLoading={isLoading}>
        Cadastrar
      </Button>
    </form>
  );
};

export default Form;
