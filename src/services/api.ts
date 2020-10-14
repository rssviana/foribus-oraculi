import axios, { AxiosError } from 'axios';
import toast from 'services/toast';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

/**
 * Response interceptor
 */

api.interceptors.response.use(
  // status code 2xx = success
  response => response,

  // response error
  async (error: AxiosError) => {
    const { message, response } = error;
    const code = response?.status;

    if (code === 401) {
      toast.error(
        'Parece que você não esta autorizado a realizar esta requisição : /',
      );
      window.location.reload();
    }

    if (message === 'Network Error') {
      toast.error('Não conseguimos acesso ao servidor: Erro de rede');
    }

    return Promise.reject(error);
  },
);

export default api;
