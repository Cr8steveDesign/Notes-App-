/* eslint-disable no-unused-vars */
import "./main-app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Note from "../Notes/note";
import NotesEditor from "../noteeditor/NotesEditor";

import { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";

const MainApp = () => {
  const [editState, setEditState] = useState(false);
  const { allNotes } = useContext(NotesContext);

  const handleEditState = () => setEditState(!editState);

  return (
    <div className="overall-container">
      <div className="mainapp">
        {editState && <NotesEditor handleEditState={handleEditState} />}
        <Header />
        {allNotes.map((note) => {
          if (note === "undefined") {
            return "";
          } else {
            return note === {} ? null : (
              <Note key={Math.random()} data={note} />
            );
          }
        })}
      </div>
      <Footer handleEditState={handleEditState} />
    </div>
  );
};

export default MainApp;
