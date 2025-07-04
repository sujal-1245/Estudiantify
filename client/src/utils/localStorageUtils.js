// src/utils/localStorageUtils.js

import { LOCAL_STORAGE_KEY } from "./constants";

export const getStudentsFromStorage = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveStudentsToStorage = (students) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
};

export const clearStudentStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
