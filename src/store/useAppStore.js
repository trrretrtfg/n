import { create } from 'zustand';

export const useAppStore = create((set) => ({
  memories: [],
  notifications: [],
  setMemories: (memories) => set({ memories }),
  setNotifications: (notifications) => set({ notifications })
}));