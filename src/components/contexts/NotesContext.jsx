import { createContext, useState } from "react";

export const NotesContext = createContext([]);

export const NotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const value = { allNotes, setAllNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
