import axios from 'axios';

export const baseUrl =
  process.env.REACT_APP_BASE_URI || 'https://api.vetvet.co/api/v1/';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000
});

const apiClient = {
  async get(url, opts = {}) {
    return api.get(url, opts);
  }
};

const ApiService = {
  getPractices: function () {
    return apiClient.get('practices');
  },
};

export default ApiService;
