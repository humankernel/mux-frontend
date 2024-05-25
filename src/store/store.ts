import { create } from "zustand";

export const useStore = create<{
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}>((set, get) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () => set({ isSidebarCollapsed: !get().isSidebarCollapsed }),
}));
