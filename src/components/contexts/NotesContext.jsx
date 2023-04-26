import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext([]);
export const NotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("allNotes");
    setAllNotes(JSON.parse(storedNotes));
  }, []);

  const value = { allNotes, setAllNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
