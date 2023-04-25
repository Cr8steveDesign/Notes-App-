import "./note.scss";
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

const Note = (props) => {
  const { data } = props;
  const { allNotes, setAllNotes } = useContext(NotesContext);
  console.log(allNotes.length);

  const handleDelete = (e) => {
    setAllNotes((prev) => prev.filter((note) => note.id !== +e.target.id));
  };

  return (
    allNotes.length > 0 && (
      <div className="note-container">
        <div className="note-title-container">
          <div style={{ display: "flex", gap: "8px" }}>
            <p>✅</p>
            <p className="title">{data.title}</p>
          </div>
          <div
            role="button"
            className="button"
            title="Delete Note"
            id={data.id}
            onClick={handleDelete}
          >
            🚮
          </div>
        </div>
        <p>{data.content}</p>
        <hr />
        <small>{data.dateCreated}</small>
      </div>
    )
  );
};

export default Note;
