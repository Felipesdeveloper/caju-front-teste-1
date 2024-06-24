export function isCPFValid(cpf: string): boolean {
  const cpfTemp = cpf.replace(/\D/g, '');

  if (cpfTemp.toString().length !== 11 || /^(\d)\1{10}$/.test(cpfTemp)) {
    return false;
  }

  let result = true;

  [9, 10].forEach((j) => {
    let soma = 0;
    let r;

    cpfTemp
      .split(/(?=)/)
      .splice(0, j)
      .forEach((e, i) => {
        soma += parseInt(e, 10) * (j + 2 - (i + 1));
      });

    r = soma % 11;
    r = r < 2 ? 0 : 11 - r;

    if (r !== parseInt(cpfTemp.substring(j, j + 1), 10)) {
      result = false;
    }
  });
  return result;
}
