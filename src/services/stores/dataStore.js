import { create } from 'zustand';

export const useDataStore = create((set) => ({
  selectedData: null, // Estado inicial
  setSelectedData: (selectedData) => set({ selectedData }), // Função para atualizar o estado
}));