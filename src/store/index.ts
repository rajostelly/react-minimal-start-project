import { create } from "zustand";

export const useThemeStore = create<{ theme: string }>((set) => ({
  theme: "light",
  setTheme: (theme: string) => set({ theme }),
}));
