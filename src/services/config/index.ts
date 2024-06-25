import axios from 'axios';
import { VITE_CJ_HOST_BFF } from '@/constants';

const apiService = axios.create({
  baseURL: VITE_CJ_HOST_BFF,
});

apiService.interceptors.response.use((response) => response.data);

export default apiService;
