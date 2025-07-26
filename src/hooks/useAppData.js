// src/hooks/useAppData.js
import { useState, useEffect } from 'react';
import { DataService } from '../services/data/dataService';

export const useAppData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const appData = DataService.getAllData();
      setData(appData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    cities: data?.cities || [],
    events: data?.city_events || [],
    attractions: data?.what_to_do || [],
    commerce: data?.local_commerce || []
  };
};