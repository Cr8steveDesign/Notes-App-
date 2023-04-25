import "./noteseditor.scss";
import { NotesContext } from "../contexts/NotesContext";
import { useContext, useState } from "react";

const NotesEditor = (props) => {
  const { setAllNotes } = useContext(NotesContext);

  const [textFields, setTextFields] = useState({});

  const handleChange = (e) => {
    setTextFields((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        dateCreated: new Date().toDateString(),
        id: Math.random(),
      };
    });
  };

  const handleSubmit = () => {
    setAllNotes((prev) => [...prev, textFields]);

    props.handleEditState();
  };

  return (
    <div className="editor-container">
      <div>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" onChange={handleChange} />
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
          ></textarea>
        </label>
        <input type="button" value="Submit" onClick={handleSubmit} />
        <input type="button" value="Cancel" onClick={props.handleEditState} />
      </div>
    </div>
  );
};

export default NotesEditor;
