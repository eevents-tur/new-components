// src/services/api/index.js
import data from '../../../assets/db.json';

// Simula delay de rede para manter o comportamento realista
const simulateNetworkDelay = (ms = 300) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  get: async (endpoint) => {
    await simulateNetworkDelay();

    const routes = {
      '/cities': data.cities,
      '/city_events': data.city_events,
      '/what_to_do': data.what_to_do,
      '/local_commerce': data.local_commerce,
      '/': data // retorna tudo se não especificar endpoint
    };

    const responseData = routes[endpoint] || data;

    return {
      data: responseData,
      status: 200,
      statusText: 'OK'
    };
  }
};