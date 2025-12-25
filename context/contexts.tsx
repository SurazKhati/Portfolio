"use client";

import { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Define the type for the combined context
type AppContextType = {
  darkState: boolean;
  toggleDark: () => void;
  mblview: boolean;
};

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // Dark mode state
  const [darkState, setDark] = useState<boolean>(false);
  // Mobile view state
  const [mblview, setMblview] = useState<boolean>(false);

  // Load dark mode from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDark(JSON.parse(saved));
  }, []);

  // Update mblview on window resize
  useEffect(() => {
    const handleResize = () => setMblview(window.innerWidth < 800);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDark = () => {
    setDark((prev) => {
      const newState = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newState));
      return newState;
    });
  };

  const contextValue: AppContextType = {
    darkState,
    toggleDark,
    mblview,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Custom hook for easy consumption
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used inside AppContextProvider");
  return context;
};

export { AppContextProvider, useAppContext };
