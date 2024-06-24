import { z } from 'zod';
import { regexFullName } from '@/utils/formatters';
import { isCPFValid } from '@/utils/validate';

const newUserSchema = z.object({
  email: z.string().email('informe um email valido'),
  employeeName: z.string().regex(regexFullName, 'informe um nome valido'),
  admissionDate: z.string().date('informe uma data valida'),
  cpf: z.string().refine(
    (field) => {
      if (!isCPFValid(field)) {
        return false;
      }

      return true;
    },
    {
      message: 'informe um CPF valido',
    },
  ),
});

export type newUserSchemaType = z.infer<typeof newUserSchema>;

export default newUserSchema;
