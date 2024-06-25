import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export const regexFullName =
  /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;

export const regexOnlyNumbers = /[^0-9]/g;

export function formatCPF(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const formatDateToPatternRequested = (date: string) => {
  const parsedDate = parseISO(date);
  const innerPattern = 'dd/MM/yyyy';

  if (parsedDate.getFullYear() === 0) {
    return '';
  }

  return format(parsedDate, innerPattern, { locale: ptBR });
};
