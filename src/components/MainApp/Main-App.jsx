/* eslint-disable no-unused-vars */
import "./main-app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Note from "../Notes/note";
import NotesEditor from "../noteeditor/NotesEditor";

import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";

const MainApp = () => {
  const [editState, setEditState] = useState(false);
  const { allNotes } = useContext(NotesContext);
  const [darkState, setDarkState] = useState(true);

  const handleEditState = () => setEditState(!editState);

  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
  }, [allNotes]);

  const Styles = darkState
    ? {
        backgroundColor: "#25383C",
        color: "white",
      }
    : {};

  return (
    <div style={Styles} className="overall-container">
      <div className="mainapp">
        {editState && <NotesEditor handleEditState={handleEditState} />}
        <Header darkState={darkState} setDarkState={setDarkState} />
        <div className="notes-holder">
          {allNotes.map((note) => {
            if (note === "undefined") {
              return "";
            } else {
              return <Note key={Math.random()} data={note} />;
            }
          })}{" "}
        </div>
      </div>
      <Footer handleEditState={handleEditState} />
    </div>
  );
};

export default MainApp;
