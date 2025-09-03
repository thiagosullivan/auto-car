import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const loadFavorites = () => {
      const stored = localStorage.getItem("likedCars");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    };

    loadFavorites();

    // Escutar mudanças no storage
    const handleStorageChange = () => {
      loadFavorites();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("favoritesUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("favoritesUpdated", handleStorageChange);
    };
  }, []);

  const toggleFavorite = (slug: string) => {
    const newFavorites = favorites.includes(slug)
      ? favorites.filter((s) => s !== slug)
      : [slug, ...favorites];

    setFavorites(newFavorites);
    localStorage.setItem("likedCars", JSON.stringify(newFavorites));

    // Disparar evento para atualizar outras partes do app
    window.dispatchEvent(new CustomEvent("favoritesUpdated"));
  };

  return { favorites, toggleFavorite };
};
