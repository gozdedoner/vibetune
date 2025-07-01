// src/utils/libraryStorage.js
// utils/libraryStorage.js

const STORAGE_KEY = "vibetune-library";

// localStorage'dan kitaplık verisini al
export const getLibraryFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Kitaplık verisi okunamadı:", error);
    return [];
  }
};

// kitaplık verisini localStorage'a kaydet
export const saveLibraryToStorage = (library) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  } catch (error) {
    console.error("Kitaplık verisi kaydedilemedi:", error);
  }
};
