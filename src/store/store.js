import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      isDarkMode: false, // Default theme
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // Toggle theme

      weather: "", // Weather state
      setWeather: (prop) => set(() => ({ weather: prop })), // Set weather data
    }),
    {
      name: "app-storage",
    }
  )
);

export default useStore;
