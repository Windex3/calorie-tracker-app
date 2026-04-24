import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NutritionEntry, NutritionGoals } from '../types/nutrition';

type NutritionStore = {
  goals: NutritionGoals;
  entries: NutritionEntry[];
  setGoals: (goals: NutritionGoals) => void;
  addEntry: (entry: NutritionEntry) => void;
  loadData: () => Promise<void>;
  deleteEntry: (id: string) => void;
};

export const useNutritionStore = create<NutritionStore>((set) => ({
  goals: {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 70,
    fiber: 25,
    sodium: 2300,
  },
  entries: [],

  setGoals: async (goals) => {
    set({ goals });
    await AsyncStorage.setItem('goals', JSON.stringify(goals));
  },

  addEntry: async (entry) => {
    set((state) => {
      const updatedEntries = [...state.entries, entry];
      AsyncStorage.setItem('entries', JSON.stringify(updatedEntries));
      return { entries: updatedEntries };
    });
  },

  loadData: async () => {
    const savedGoals = await AsyncStorage.getItem('goals');
    const savedEntries = await AsyncStorage.getItem('entries');

    set({
      goals: savedGoals ? JSON.parse(savedGoals) : {
        calories: 2000,
        protein: 150,
        carbs: 250,
        fat: 70,
        fiber: 25,
        sodium: 2300,
      },
      entries: savedEntries ? JSON.parse(savedEntries) : [],
    });
  },

  deleteEntry: async (id) => {
    set((state) => {
      const updatedEntries = state.entries.filter((entry) => entry.id !== id);
      AsyncStorage.setItem('entries', JSON.stringify(updatedEntries));
      return {entries: updatedEntries};
    });
  },
}));