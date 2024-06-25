if (!import.meta.env.VITE_CJ_HOST_BFF) {
  throw new Error('Variável de ambiente CJ_HOST_BFF não definida');
}

const { VITE_CJ_HOST_BFF } = import.meta.env;

export { VITE_CJ_HOST_BFF };
