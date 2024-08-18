// src/context/FavoritesContext.tsx
import React, { createContext, useState, useContext } from "react";

interface Pet {
  name: string;
  age: string;
  size: string;
  gender: string;
  type: "dog" | "cat";
  image: string;
  description: string;
  location?: string;
  isNeutered: boolean;
  isVaccinated: boolean;
  isDewormed: boolean;
}

interface FavoritesContextType {
  favoritePets: Pet[];
  addFavoritePet: (pet: Pet) => void;
  removeFavoritePet: (petName: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);

  const addFavoritePet = (pet: Pet) => {
    setFavoritePets((prevFavorites) => [...prevFavorites, pet]);
  };

  const removeFavoritePet = (petName: string) => {
    setFavoritePets((prevFavorites) => prevFavorites.filter((pet) => pet.name !== petName));
  };

  return (
    <FavoritesContext.Provider value={{ favoritePets, addFavoritePet, removeFavoritePet }}>
      {children}
    </FavoritesContext.Provider>
  );
};
