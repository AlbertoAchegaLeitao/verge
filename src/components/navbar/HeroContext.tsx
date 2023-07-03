import React, { useState, createContext, useContext, ReactNode } from "react";

interface HeroTextContextValue {
  heroText: string;
  handleMenuClick: (menuItem: string) => void;
}

const HeroTextContext = createContext<HeroTextContextValue | null>(null);

export const useHeroTextContext = () => {
  return useContext(HeroTextContext);
};

interface HeroTextProviderProps {
  children: ReactNode;
}

export const HeroTextProvider = ({ children }: HeroTextProviderProps) => {
  const [heroText, setHeroText] = useState(
    "Where Gastronomy and Ambiance Converge, Discover the Verge of exquisite Dining."
  );
  const handleMenuClick = (menuItem: string) => {
    if (menuItem === "home") {
      setHeroText(
        "Where Gastronomy and Ambiance Converge, Discover the Verge of exquisite Dining."
      );
    } else if (menuItem === "about") {
      setHeroText("About Us");
    } else if (menuItem === "menu") {
      setHeroText("Learn Our Menu");
    } else if (menuItem === "Reservation") {
      setHeroText("Make a Reservation");
    } else if (menuItem === "Login") {
      setHeroText("Create an Account");
    }
  };
  return (
    <HeroTextContext.Provider value={{ heroText, handleMenuClick }}>
      {children}
    </HeroTextContext.Provider>
  );
};
