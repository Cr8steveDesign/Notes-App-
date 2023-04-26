import "./noteseditor.scss";
import { NotesContext } from "../contexts/NotesContext";
import { useContext, useState, useEffect } from "react";

const NotesEditor = (props) => {
  const { setAllNotes } = useContext(NotesContext);

  const [textFields, setTextFields] = useState({});

  const handleChange = (e) => {
    setTextFields((prev) => {
      return {
        ...prev,
        [e.target.name]: `${e.target.value}`,
        dateCreated:
          new Date().toLocaleTimeString() + " || " + new Date().toDateString(),
        id: Math.random() * 100,
      };
    });
  };

  const handleSubmit = () => {
    try {
      if (textFields.title.length < 1) return;
      setAllNotes((prev) => [...prev, textFields]);
    } catch (error) {
      console.log("Sorry, there was an error: Likely an empty field");
    }
    props.handleEditState();
  };

  return (
    <div className="editor-container">
      <div>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            maxLength={32}
            required
          />
        </label>
        <label htmlFor="content">
          {" "}
          Content:
          <textarea
            name="content"
            id="content"
            cols="40"
            rows="10"
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
        <input type="button" value="Cancel" onClick={props.handleEditState} />
      </div>
    </div>
  );
};

export default NotesEditor;
